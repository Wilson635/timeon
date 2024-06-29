import React, { useEffect, useState } from 'react';
import { ID } from 'appwrite';
import { appwriteConfig, databases } from '../../lib/appwrite/config';
import { Button } from '@headlessui/react';


const PostFormNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [task, setTask] = useState('');
  const [subTasks, setSubTasks] = useState([]);
  const [completedSubTasks, setCompletedSubTasks] = useState([]);
  const [reminder, setReminder] = useState(null);
  const [userId, setUserId] = useState('');
  const [alarmAudio] = useState(new Audio('/alarm.m4a'));

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await account.get();
        setUserId(user.$id);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    getUser();
  }, []);

  useEffect(() => {
    if (reminder) {
      const reminderTime = new Date(reminder).getTime();
      const now = new Date().getTime();
      const timeUntilReminder = reminderTime - now;

      if (timeUntilReminder > 0) {
        const timeoutId = setTimeout(() => {
          showNotification();
          alarmAudio.play();
        }, timeUntilReminder);

        return () => clearTimeout(timeoutId);
      } else {
        showNotification();
        alarmAudio.play();
      }
    }
  }, [reminder, alarmAudio]);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);
  const handleTaskChange = (e) => setTask(e.target.value);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && task) {
      setSubTasks([...subTasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleSubTaskChange = (index) => {
    const newSubTasks = [...subTasks];
    newSubTasks[index].completed = !newSubTasks[index].completed;
    if (newSubTasks[index].completed) {
      setCompletedSubTasks([...completedSubTasks, newSubTasks[index]]);
      setSubTasks(newSubTasks.filter((_, i) => i !== index));
    } else {
      setSubTasks([...subTasks, newSubTasks[index]]);
      setCompletedSubTasks(completedSubTasks.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const document = await databases.createDocument(
        appwriteConfig.databaseId, // Remplacez par votre ID de base de données
        appwriteConfig.notesCollectionId, // Remplacez par votre ID de collection
        ID.unique(),
        {
          title: title,
          content: content,
          // subtitle: subTasks,
          reminder: reminder,
          users: userId
        }
      );
      console.log('Document created:', document);
      setTitle('');
      setContent('');
      setTask('');
      setSubTasks([]);
      setCompletedSubTasks([]);
      setReminder(null);
    } catch (error) {
      console.error('Error creating document:', error);
    }
  };

  const handleReminderChange = (e) => {
    setReminder(e.target.value);
  };

  const showNotification = () => {
    if (Notification.permission === 'granted') {
      const notification = new Notification('Task Reminder', {
        body: `Reminder for task: ${title}`,
        requireInteraction: true
      });

      notification.onclick = () => {
        notification.close();
        alarmAudio.pause();
        alarmAudio.currentTime = 0;
      };
    } else if (Notification.permission === 'default') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          showNotification();
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container bg-transparent text-gray-300 p-4 rounded-md mx-auto">
      <div className="mb-4">
        <label className="block mb-2 text-white">Title</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          className="w-full p-2 bg-gray-700 text-white rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 text-white">Content</label>
        <textarea
          value={content}
          onChange={handleContentChange}
          className="w-full p-2 bg-gray-700 text-white rounded-md"
        />
      </div>
      {/* <div className="mb-4">
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          onKeyPress={handleKeyPress}
          placeholder="Appuyez sur 'Entrée' pour créer des sous-tâches"
          className="w-full p-2 bg-gray-700 text-white rounded-md"
        />
      </div> */}
      {/* <ul className="mb-4">
        {subTasks.map((subTask, index) => (
          <li key={index} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={subTask.completed}
              onChange={() => handleSubTaskChange(index)}
              className="mr-2"
            />
            <span className="p-2 bg-gray-700 text-white rounded-md">{subTask.text}</span>
          </li>
        ))}
      </ul> */}
      <div className="mb-4">
        <label className="block mb-2 text-white">Définir un rappel :</label>
        <input
          type="datetime-local"
          value={reminder}
          onChange={handleReminderChange}
          className="w-full p-2 bg-gray-700 text-white rounded-md"
        />
      </div>
      {/* <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Terminé</button> */}
      <div className="mt-4 items-center justify-center flex text-center">
        <Button
          className="inline-flex gap-2 items-center justify-center rounded-md bg-indigo-700 w-[18rem] text-center py-3 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-yellow-600 data-[open]:bg-yellow-700 data-[focus]:outline-1 data-[focus]:outline-white"
          // onClick={close}
          type="submit"
        >
          Add task
        </Button>
      </div>
      {/* <div className="mt-4">
        <h3 className="text-white mb-2">Tâches complétées :</h3>
        <ul>
          {completedSubTasks.map((subTask, index) => (
            <li key={index} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={subTask.completed}
                onChange={() => handleSubTaskChange(index)}
                className="mr-2"
              />
              <span className="p-2 bg-gray-700 text-gray-500 line-through">{subTask.text}</span>
            </li>
          ))}
        </ul>
      </div> */}
    </form>
  );
};

export default PostFormNote;
