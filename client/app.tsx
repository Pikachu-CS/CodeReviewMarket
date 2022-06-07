import * as React from 'react';
import { hot } from "react-hot-loader/root";
import ListingContainer from "./components/containers/listingContainer"
interface Props {
  name:
  string;
  
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1 className="text-4xl text-white bg-black">
          Hellos {name}
        </h1>
        <ListingContainer />
      </>
    );
  }
}

export default hot(App);