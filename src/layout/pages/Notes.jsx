import React, { useEffect, useState } from 'react';
import { databases } from '../../lib/appwrite/config';
import { Trash2, Edit2, Pin, AlarmClock } from 'lucide-react'; // Assuming you have an Edit and Pin icon
import CreateNote from '../../Components/CreateNotes';
import { appwriteConfig } from '../../lib/appwrite/config';

const Notes = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.notesCollectionId);
        setTasks(response.documents);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const onDelete = async (taskId) => {
    try {
      await databases.deleteDocument(appwriteConfig.databaseId, appwriteConfig.notesCollectionId, taskId);
      setTasks(tasks.filter(task => task.$id !== taskId)); // Remove the task from state
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const onEdit = (taskId, currentTitle, currentContent) => {
    setEditingTaskId(taskId);
    setEditTitle(currentTitle);
    setEditContent(currentContent);
  };

  const onSaveEdit = async () => {
    try {
      // Update the task in the database
      await databases.updateDocument(appwriteConfig.databaseId, appwriteConfig.notesCollectionId, editingTaskId, {
        title: editTitle,
        content: editContent,
      });

      // Update the task in the local state
      setTasks(tasks.map(task => {
        if (task.$id === editingTaskId) {
          return {
            ...task,
            title: editTitle,
            content: editContent,
          };
        }
        return task;
      }));

      // Reset edit state
      setEditingTaskId(null);
      setEditTitle('');
      setEditContent('');
    } catch (error) {
      console.error('Error saving edit:', error);
    }
  };

  const onCancelEdit = () => {
    // Reset edit state without saving
    setEditingTaskId(null);
    setEditTitle('');
    setEditContent('');
  };

  const onTogglePin = async (taskId, currentPinned) => {
    try {
      // Update the task's pinned status in the database
      await databases.updateDocument(appwriteConfig.databaseId, appwriteConfig.notesCollectionId, taskId, {
        pinned: !currentPinned,
      });

      // Update the task in the local state
      setTasks(tasks.map(task => {
        if (task.$id === taskId) {
          return {
            ...task,
            pinned: !currentPinned,
          };
        }
        return task;
      }));
    } catch (error) {
      console.error('Error toggling pin:', error);
    }
  };

  return (
    <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4'>
      {tasks.map((task) => (
        <div key={task.$id} className="">
          <div className="flex h-full max-h-80 flex-col border rounded-xl text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white">
            <div className="bg-gray-100 flex border-b items-center justify-between rounded-t-xl py-3 px-4 md:py-4 md:px-5">
              <p className="mt-1 text-md flex gap-3 items-center justify-center text-n-8">
                {task.reminder && <><AlarmClock /><p className="text-n-8"> {new Date(task.reminder).toLocaleString()}</p></>}
              </p>
              <div>
                {editingTaskId === task.$id ? (
                  <>
                    <button className="text-gray-500 hover:text-gray-700 mr-3" onClick={onSaveEdit}>Save</button>
                    <button className="text-gray-500 hover:text-gray-700" onClick={onCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <div className='flex gap-3  cursor-pointer mt-5 rounded-full text-n-3 '>
                    <Edit2 className='w-10 h-10 p-3 rounded-full bg-n-7 hover:text-white items-center justify-center transition-colors hover:bg-n-6 hover:text-rose-40' onClick={() => onEdit(task.$id, task.title, task.content)} />
                    <Trash2 className='w-10 h-10 p-3 rounded-full bg-n-7 hover:text-white items-center justify-center transition-colors hover:bg-n-6 hover:text-rose-40' onClick={() => onDelete(task.$id)} />
                    <Pin className='w-10 h-10 p-3 rounded-full bg-n-7 hover:text-white items-center justify-center transition-colors hover:bg-n-6 hover:text-rose-40'
                      onClick={() => onTogglePin(task.$id, task.pinned)}
                      style={{ color: task.pinned ? 'text-yellow-700' : 'gray' }}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="p-4 md:p-5">
              <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                {task.title}
              </h3>
              <p className="mt-2 text-gray-500 dark:text-neutral-400">
                {task.content}
              </p>
            </div>
          </div>
        </div>
      ))}
      <CreateNote />
    </div>
  );
};

export default Notes;
