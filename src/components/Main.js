import React, { useReducer, useMemo, useCallback } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import Reservations from "./Reservations";
import ReservationsConfirm from "./ReservationsConfirm";

function Main() {
    const seedRandom = useCallback((seed) => {
        const m = 2 ** 35 - 31;
        const a = 185852;
        let s = seed % m;
        return () => (s = (s * a) % m) / m;
    }, []);

    const fetchAPI = useCallback((date) => {
        const result = [];
        const random = seedRandom(date.getDate());

        for (let i = 17; i < 23; i++) {
            if (random() < 0.5) {
                result.push(`${i}:00`);
            }

            if (random() > 0.5) {
                result.push(`${i}:30`);
            }
        }

        return result;
    }, [seedRandom]);

    const submitAPI = useCallback((formData) => {
        return true;
    }, []);

    const initialState = useMemo(() => ({ availableTimes: fetchAPI(new Date()) }), [fetchAPI]);

    const updateTimes = useCallback((state, date) => {
        return { availableTimes: fetchAPI(new Date()) };
    }, [fetchAPI]);

    const [state, dispatch] = useReducer(updateTimes, initialState);

    const navigate = useNavigate();

    const submitForm = useCallback((formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    }, [submitAPI, navigate]);

    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<Header />} />
                <Route path="/reservations" element={<Reservations availableTimes={state} dispatch={dispatch} submitForm={submitForm} />} />
                <Route path="/confirmed" element={<ReservationsConfirm />} />
            </Routes>
        </main>
    );
}

export default Main;
