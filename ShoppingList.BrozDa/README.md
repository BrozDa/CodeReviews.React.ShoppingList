### Shopping List project

## Project overview
A full-stack application built with .NET (Minimal APIs) and React, demonstrating complete CRUD functionality. The backend uses .NET Minimal APIs and Entity Framework Core to manage data in an MS SQL database. On the frontend, a responsive React interface allows users to add items, mark them as picked up, or remove them from a shopping list.

Link: [Shopping List](https://www.thecsharpacademy.com/project/37/shopping-list)

## Requirements
- This is a CRUD Shopping List App with React and .NET Web API .
- Users should be able to cross items from the shopping-list without deleting them. You can use a IsPickedUp boolean for that.
- You should create two projects: A .NET WebApi and a React app.
- You can choose whatever database solution you want: Sqlite, SQL server or whatever you're comfortable with.
- You can choose whatever ORM you want: Dapper, EF, ADO.NET.
- To keep it simple, don't create a project that allows multiple shopping lists.
- Your database should have a single "ShoppingListItems" table. The objective is to focus on React, so we should avoid the complexities of relational data.
- You CANNOT use Axios or Redux.

## Lessons Learned
- A biggest takeaway from this project was understanding and effectively using the React useContext hook. 
- I also learned how to handle HTTP requests beyond simple GET requests. To my surprise, making POST (and other types of) requests required only minor changes.
- Additionally, I implemented both the API and the React frontend within the same solution in Visual Studio 2022. While it was convenient to have everything at one place, I missed some of the front-end development features available in Visual Studio Code — for example, the ES7+ React/Redux/React-Native snippets extension, better JSX code formatting, and overall learned the importance of choosing the right development environment.

## Features:
### Handling data loading/ error handling
  - User is informed when data is being handled and about any error encountered respectively
### Shopping List
  - User can add, mark as picked up and delete any item from the shopping list
  - User clearly sees what items he already picked by color coding and strike through text
  - Shopping list is sorted alphabetically after any operation with non picked product on top, picked on the bottom 

## Areas for improvement
- This may not be a direct improvement to the current project, but I plan to revisit it in the near future to learn more about the traditional MVC approach and experiment with styling using Tailwind CSS.

## Resources used
- Multiple tutorials/ articles about React useContext hook
- React, HTML, CSS documentation
- Past projects for .NET API Creation

## Images
![image](https://github.com/user-attachments/assets/0fdf5ebd-48fe-4c24-afa1-681b6ed4d739)
