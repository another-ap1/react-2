### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
To turn a single page react application into a multi page application

- What is a single page application?
single page application is when everything is on one page and you dont have to go to differnent pages and render different routes.

- What are some differences between client side and server side routing?
client side doesnt require a full page refresh while server side does. 

- What are two ways of handling redirects with React Router? When would you use each?
you can use the <redirect /> or you can also set up a <route/> at the end of all your routes for that to happen if nothing is matched above it. 

- What are two different ways to handle page-not-found user experiences using React Router?
You can set up a 404 route. 

- How do you grab URL parameters from within a component using React Router?
useing the useParams hook from react-router-dom

- What is context in React? When would you use it?
it is a tool to avoid prop drilling. you would use it when you want to pass a prop down to a child or grand child but you dont want to have to keep passing it down to components that dont need them. 

- Describe some differences between class-based components and function
  components in React.

class based components is the old way you would write components. the function component is the newer nicer way to write components. Knowing how class components work is still very useful in case you are working with a older application and need to do refactoring. 

- What are some of the problems that hooks were designed to solve?
they were created so you didnt have to use classes. when using state inside a class component you would lose the this context when you had multiple states to update so you would have to put them in constructors to solve this which led to more lines of code to write.