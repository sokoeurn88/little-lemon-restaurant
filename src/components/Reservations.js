import ReservationsForm from "./ReservationsForm";

function Reservations(props) {
    return (
        <>
            <ReservationsForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm} />
        </>
    )
}

export default Reservations;
