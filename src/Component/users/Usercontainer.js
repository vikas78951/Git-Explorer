import React,{Component} from 'react';
import Userlist from './Userlist'

class Usercontaniner extends Component{

    // state={
    //     users:[
    //         {
    //             id:1,
    //             login:"mojombo",
    //             avatar:"https://avatars0.githubusercontent.com/u/1?v=4",
    //             profile:"https://github.com/mojombo"
    //         },
    //         {
    //             id:2,
    //             login:"defunkt",
    //             avatar:"https://avatars0.githubusercontent.com/u/2?v=4",
    //             profile:"https://github.com/defunkt"
    //         },
    //         {
    //             id:3,
    //             login:"pjhyett",
    //             avatar:"https://avatars0.githubusercontent.com/u/3?v=4",
    //             profile:"https://github.com/pjhyett"
    //         },
    //         {
    //             id:4,
    //             login:"wycats",
    //             avatar:"https://avatars0.githubusercontent.com/u/4?v=4",
    //             profile:"https://github.com/wycats"
    //         },
    //         {
    //             id:5,
    //             login:"ezmobius",
    //             avatar:"https://avatars0.githubusercontent.com/u/5?v=4",
    //             profile:"https://github.com/ezmobius"
    //         },
    //         {
    //             id:6,
    //             login:"ivey",
    //             avatar:"https://avatars0.githubusercontent.com/u/6?v=4",
    //             profile:"https://github.com/ivey"
    //         }
    //     ]
          
    // }

    
    render(){
       
        return(            
                <section>
                <div className="row body-container mx-auto mt-5">
                    {
                        this.props.mydata.map(
                            user=>(
                            <Userlist key={user.id} user={user} />
                            )
                        )
                    }
                </div>    
                </section>
    
           
        );
    }


}
export default Usercontaniner;

