import "./App.css";

function Header(){
    return(
        <header>
            <h1>Little Lemon Restaurant</h1>
            <img src={require('./photo.png')} alt="little lemon logo" hight="140px" with="140px" />
            <meta name="description" content="Come to enoy all delicious food. All flavor of food you can find here."/>
            <meta name="og:title" content="we just add two more special most popular dishes"/>
            <meta name="og:description" content="Little Lemon Restaurant"/>
            <meta name="og:image" content="https://littlelemon.vercel.app/static/img/head_chef.jpg"/>
        </header>
    );
}
export default Header;