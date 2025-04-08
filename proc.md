```markdown
# Práctica: Creación de una Lista de Tareas en React con Desarrollo Basado en Componentes

Esta práctica te guiará paso a paso para crear una aplicación de lista de tareas utilizando React. Aprenderás a estructurar tu proyecto dividiendo la funcionalidad en componentes reutilizables. ¡Comencemos!

---

## Paso 1: Crear la aplicación base

1. Abre tu terminal y ejecuta el siguiente comando para crear una nueva aplicación React:
   ```bash
   npx create-react-app lista-de-tareas
   ```

2. Cambia al directorio del proyecto recién creado:
   ```bash
   cd lista-de-tareas
   ```

---

## Paso 2: Crear una carpeta para los componentes

1. Dentro del directorio `src`, crea una carpeta llamada `components`:
   ```bash
   mkdir src/components
   ```

---

## Paso 3: Crear los archivos de los componentes

Dentro de la carpeta `src/components`, crea los siguientes archivos:

- `Header.js`
- `TodoForm.js`
- `TodoList.js`
- `TodoItem.js`

Luego, copia y pega el código proporcionado para cada archivo:

### Header.js
```javascript
import React from 'react';

function Header() {
  return <header><h1>Lista de Tareas</h1></header>;
}

export default Header;
```

### TodoForm.js
```javascript
import React, { useState, useEffect } from 'react';

function TodoForm({ onAdd }) {
  const [text, setText] = useState(() => {
    const saved = localStorage.getItem("text");
    return JSON.parse(saved) || "";
  });

  useEffect(() => {
    localStorage.setItem("text", JSON.stringify(text));
  }, [text]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Agregar nueva tarea" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default TodoForm;
```

### TodoItem.js
```javascript
import React from 'react';

function TodoItem({ todo, onDelete }) {
  return (
    <li>
      {todo}
      <button onClick={onDelete}>Eliminar</button>
    </li>
  );
}

export default TodoItem;
```

### TodoList.js
```javascript
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDelete }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onDelete={() => onDelete(index)} />
      ))}
    </ul>
  );
}

export default TodoList;
```

---

## Paso 4: Configurar el componente principal (App.js)

1. Abre el archivo `src/App.js` y reemplaza su contenido con el siguiente código:

```javascript
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  const handleAddTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  return (
    <div>
      <Header />
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
}

export default App;
```

---

## Paso 5: Añadir estilos (App.css)

1. Crea un archivo llamado `src/App.css` y añade el siguiente código para estilizar tu aplicación:

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

header {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

form {
  margin-bottom: 20px;
}

form input[type="text"] {
  width: calc(100% - 80px);
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

form button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

button {
  background-color: #cc0000;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
```

---

## Paso 6: Ejecutar la aplicación

1. Vuelve a la raíz del proyecto y ejecuta el servidor de desarrollo:
   ```bash
   npm start
   ```

2. Accede a la aplicación desde tu navegador en [http://localhost:3000](http://localhost:3000).

---

¡Felicidades! Ahora tienes una lista de tareas funcional creada con React y basada en componentes reutilizables.
``` 

Este archivo `.md` está listo para ser utilizado en cualquier plataforma que soporte Markdown.
