import React from "react";

const Home = () =>{
    return(
        <div className="flex flex-row justify-between space-x-3 p-10">

            <div className="shadow-xl border-t rounded-xl w-1/6 h-screen p-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At commodi fugiat laboriosam, natus nemo perferendis sapiente sed sequi tempore velit! Architecto aspernatur at atque commodi iure molestiae nam natus repellat.</p>
            </div>

            <div className="shadow-xl border-t rounded-xl w-2/3 h-screen p-5">

            </div>

            <div className="shadow-xl border-t rounded-xl w-1/6 h-screen p-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dicta distinctio dolore perspiciatis. Asperiores assumenda autem delectus dolorum ducimus earum eligendi fugit harum minus molestiae nostrum odit omnis, quibusdam veniam.</p>
            </div>

        </div>
    )
}

export default Home;