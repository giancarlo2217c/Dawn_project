import React from 'react';
import NotePad from '../components/notePad/NotePad'
import { NavBar } from '../components/navBar/NavBar'
import Survey from '../features/survey/Survey'

function NotesPage() {
    return (
        <div>
        <NavBar/>
        <NotePad/>
        </div>
    )
}

export default NotesPage