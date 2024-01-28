import { useState } from "react";


function ReservationsForm(props) {

    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);

    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }

    return (
        <>
            <header>
                <section>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <div>
                                <label htmlFor="reservation-date">Choose Date:</label>
                                <input id="reservation-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required />
                            </div>

                            <div>
                                <label htmlFor="reservation-time">Choose Time:</label>
                                <select id="reservation-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                                    <option value="">Select a Time</option>
                                    {
                                        props.availableTimes.availableTimes.map(availableTimes => { return <option key={availableTimes}>{availableTimes}</option> })
                                    }

                                </select>
                            </div>

                            <div>
                                <label htmlFor="reservation-guests">Nr. of Guests:</label>
                                <input id="reservation-guests" type="number" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} />
                            </div>

                            <div>
                                <label htmlFor="reservation-occasion">Occasion:</label>
                                <select id="reservation-occasion" key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                </select>
                            </div>

                            <div className="btnSubmit">
                                <input aria-label="On Click" type="submit" value={"Reserve table"} />
                            </div>
                        </fieldset>
                    </form>
                </section>
            </header>
        </>
    )
}

export default ReservationsForm;
