import { render } from "@testing-library/react";
import React from "react";


class Detail extends React.Component{
    componentDidMout(){
        const {location,history}=this.props;

        console.log("!")
        console.log(location.state);
        if(location.state===undefined)
            history.push("/");
    }
    render(){
        const{location}=this.props
    return <span>{location.state.title}</span>
    }
}
export default Detail;