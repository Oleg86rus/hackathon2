import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./app/components/ui/navBar";
import Breadcrumbs from "./app/components/common/breadcrumbs";
import Main from "./app/components/layouts/main";
import NotFound from "./app/components/page/notFound";
import UserPage from "./app/components/page/userPage";
import Users from "./app/components/layouts/users";
import Favorites from "./app/components/layouts/favorites";
import ProgressBar from "./app/components/ui/progressBar";

function App() {
  return (
    <div>
      <NavBar />
      <Breadcrumbs />

      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/user" component={Users} />
        <Route path="/user/:userId?" component={UserPage} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/users/404" component={NotFound} />
        <Redirect to="404" />
      </Switch>
      <ProgressBar percent={50} color="red" types="circle">
        html
      </ProgressBar>
      <ProgressBar percent={50} color="green">
        css
      </ProgressBar>
    </div>
  );
}

export default App;
