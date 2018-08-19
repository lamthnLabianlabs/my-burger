import React from 'react';
import style from './style.css';
class Layout extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className={"col-md-12"}>
                        <div>This is a header</div>
                    </div>
                    <div className={"col-md-12"}>
                        <main className={style.main}>
                            {
                                this.props.children
                            }
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}
export default Layout