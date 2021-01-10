import React from 'react';
import {connect} from 'react-redux'
import {getSmurfs} from '../actions/index'
import Smurf from '../components/Smurf'

export class SmurfDisplay extends React.Component {
    componentDidMount(){
        // console.log("CDM SmurfDisplay")
        this.props.getSmurfs();
        // console.log("Map", this.props.smurfs)
    }
    componentDidUpdate(){
        console.log("CDU SmurfDisplay", this.props.smurfs)
    }
    
    render() {
        return(
            <div className="smurfContainer">

              
              
                {this.props.isLoading === true  ? <h3>Loading smurfs...</h3> : <h3>Here are your smurfs:</h3>}
                


                {this.props.smurfs && this.props.smurfs.map(smurf=>(
                    <Smurf key={smurf.id} smurf={smurf}/>
                ))}
                

            </div>
        
        )
      }
}

const mapStateToProps = (state) => {
    return{
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}
const mapDispatchToProps = {getSmurfs}


export default connect(mapStateToProps, mapDispatchToProps)(SmurfDisplay);

//Task List:
//x1. Import in all needed components and library methods.
//x2. Connect all needed redux state props and action functions to the component before exporting.
//x3. Fetch all smurfs when the component first mounts.
//x4. Render loading text or graphic if the application is currently loading.
//x5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.