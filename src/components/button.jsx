function MyButton({text}) {

    const myEvent = () =>{
        alert(`hello`);
    }
    return (
        <>
        <button onClick={myEvent}>{text}</button>
        </>
    )
}
export default MyButton;