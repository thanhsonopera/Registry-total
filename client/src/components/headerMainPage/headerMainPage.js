import './headerMainPage.css'

function HeaderMainPage(props) {
    return (
        <>
            <section className="conatainerPhrase2">
                <header>
                    <h1>{props.headertitle}</h1>
                </header>

                <div className='cutLine'>

                </div>

            </section>
        </>
    );
}

export default HeaderMainPage;