import {Switch, Route} from "react-router-dom";
const Routes = ({route}) => {
 return ( 
  <Switch>
   {route.map((rout) => ( <Route key={rout.path}  {...rout }/>))}
  </Switch> 
  );
}
 
export default Routes;