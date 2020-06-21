import React from 'react';

const Index = (props) => {
    return (
        <div className="container mx-auto">
            <section className="h-screen flex flex-col justify-center items-center">
                <h1 className="text-5xl text-center font-bold">HI I’M DANIEL DE JESUS</h1>
                <h3 className="text-2xl text-center">Fullstack Developer</h3>
            </section>
            <section className="h-screen mt-8 p-20">
                <h3 className="text-4xl tracking-widest">RESUME</h3>
                <div className="mt-12 flex flex-row items-center">
                    <img 
                    src="https://avatars3.githubusercontent.com/u/56522385?s=460&u=06fe342b22147506c0fd975b1ae96d4ec3bfe7bd&v=4" 
                    alt="Eu"
                    className="w-64 h-64 rounded-full"
                    />
                    <p className="text-2xl font-light ml-32">
                      Passionate FullStack developer,
                      proactive, always looking for 
                      new challenges that make me 
                      evolve as a professional. 
                      Studying constantly, and as 
                      far as possible sharing 
                      knowledge with others around me 
                      and  in communities.
                    </p>
                </div>
                <div className="mt-8 p-20 flex flex-col items-center">
                    <h3 className="text-4xl text-center tracking-widest">Toolbox</h3>
                    <div className="flex flex-row items-center" >
                        <img src="icons8-nodejs-64.png" alt="nodejs"/>
                        <img src="icons8-react-native-50.png" alt="react"/>
                        <img src="icons8-redux-50.png" alt="redux"/>
                        <img src="icons8-git-50.png" alt="git"/>
                        <img src="icons8-javascript-50.png" alt="javascript"/>
                        <img src="icons8-visual-studio-60.png" alt="vscode"/>
                        <img src="icons8-css3-50.png" alt="css"/>
                        <img src="icons8-database-50.png" alt="noSQL-SQL"/>
                        <img src="icons8-html-5-50.png" alt="html"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Index;
