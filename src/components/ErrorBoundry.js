import React,{Component} from "react";

class ErrorBoudnry extends Component {
    constructor(props) {
        super(props);
        this.state = {
        hasError: false
        }
    }


    componentDidCatch(error,info){

        this.setState({hasError: true});


    }

    rendor(){

        if(this.state.hasError){
            return <h1>ooops. that is not good</h1>
        }

        return this.props.children
    }

   


}