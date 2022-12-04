import './App.css';
import Header1 from './MyComponents/Header';
import { AddTodos } from './MyComponents/AddTodos';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, { useState } from 'react'; //! importing a state hook use to make page reactive.
function App() {
  let addTodos=(title,dec)=>{
    let sno=1;
    if(todos.length!==0)sno=todos[todos.length-1].sno+1;
     const myTodo={
      sno: sno,
      title: title,
      dec: dec,
  }
  console.log("myTodo",myTodo);
   setTodos([...todos,myTodo]); //! spread operator
  }
 let OnDelete =(todo)=>{
    console.log("Delete me",todo);
    /*
    let index =todos.indexof(todo); todos.splice(index,1);
    //* this way doesn't work in react but work in js or Angular 
    */
   setTodos(todos.filter((e)=>{
    return e!==todo;
   }));
  }
const [todos,setTodos]=useState([  //! useState is a fun
     {
    sno:1,
     title:"Bellman Ford Algorithm",
     dec: "Bellman Ford Algorithm computes shortest paths from a single source vertex to all of the other vertices in a weighted digraph. Similar to Dijkstra's algorithm, it proceeds by relaxation. However, Dijkstra's algorithm uses a priority queue to greedily select the closest vertex that has not been processed, which all of its outgoing edges will be processed. On the other hand, Bellman Ford Algorithm relaxes all the edges and does the relaxation only |V| - 1 times where |V| is the number of vertices in the graph. This is because given a graph with no negative weight cycles with VV vertices, the shortest path between any two vertices has at most |V| - 1 edges."
  },
  {
     sno:2,
     title:"Dijkstra's Algorithm",
     dec: "Dijkstra's Algorithm is used to find the shortest paths between nodes in a graph. It can only be used when the graphs have non-negative weights for all edges.Let dist[u] be the distance / cost / weight to reach node u. Initially, we use a priority queue to maintain the pair p where p.first is the node and p.second is the cost. We set the distance from source to source is 0 with 0 cost and push the starting point to the priority queue.The first run, the vertex is the source node. We remove it and check its neighbors. If the distance to the neighbor is greater than the current distance plus the cost, then it means a shorter path is found. Hence, we update it and push it to the priority queue for further process."
  },
  {
     sno: 3,
     title: "Kadane Algorithm",
     dec: "Store the sum of elements of the current subarray found so far.Keep updating the maximum sum of subarray found so far by checking if the current sum is greater than the maximum sum found so far or not.If the current sum is less than 0, then we can neglect the current subarray and start a new subarray from the next element."
  }
]);
  return (
     <>
     <Header1 title="Algo Specialised" searchBar={false}/>
     <Todos  todos={todos} OnDelete={OnDelete}/>
     <AddTodos addTodos={addTodos}/>
     <Footer/>
     </>
  );
}

export default App;