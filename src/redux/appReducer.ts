import {getAuthUserData} from "./authReducer";
import {InferActionsTypes} from "./reduxStore";

// const INITIALIZED_SUCCESS = 'SN/APP/INITIALIZED-SUCCESS';

// Type (TS)
// Initial State App
let initialState = {
    initialized: false,

    theme: {
        currentTheme: 'night',

        global: {
            color: '#fefcf6'
        },

        sidebar: {
            background: '#110f1a',
            backgroundSecondary: '#1c1b2c'
        },

        section: {
            background: '#34353a',
            backgroundSecondary: 'rgba(48,45,77,0.34)',
        },

        button: {
            // Active
            backgroundActive: '#1c1b2c',

            // Disabled
            colorDisabled: '#8f8e8a',
            backgroundDisabled: '#1c1b2c',
        }
    }
};


export type InitialStateType = typeof initialState

// Reducer
const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/APP/INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            };

        case 'SN/APP/CHANGE-THEME':
            let newTheme: any = {}

            if (action.whatTheme == 'night') {

                newTheme = {
                    currentTheme: 'night',

                        global: {
                        color: '#fefcf6'
                    },

                    sidebar: {
                        background: '#110f1a',
                            backgroundSecondary: '#1c1b2c'
                    },

                    section: {
                        background: '#34353a',
                            backgroundSecondary: 'rgba(48,45,77,0.34)',
                    },

                    button: {
                        // Active
                        backgroundActive: '#1c1b2c',

                            // Disabled
                            colorDisabled: '#8f8e8a',
                            backgroundDisabled: '#1c1b2c',
                    }
                }
            } else {
                newTheme = {
                    currentTheme: 'day',

                        global: {
                        color: '#282727'
                    },

                    sidebar: {
                        background: '#c4c4c4',
                            backgroundSecondary: '#d3d2e8'
                    },

                    section: {
                        background: '#e5e5e5',
                            backgroundSecondary: 'rgba(172,158,215,0.34)',
                    },

                    button: {
                        // Active
                        backgroundActive: '#d3d2e8',

                            // Disabled
                            colorDisabled: '#8f8e8a',
                            backgroundDisabled: '#1c1b2c',
                    }
                }
            }


            return {
                ...state,
                theme: newTheme
            };




        default :
            return state;
    }
};

// Type (TS)
type ActionsType = InferActionsTypes<typeof actions>

// Action Creator (AC)
export const actions = {
    initializedSuccess: () => ({type: 'SN/APP/INITIALIZED-SUCCESS'} as const),
    changeTheme: (whatTheme: string) => ({type: 'SN/APP/CHANGE-THEME', whatTheme} as const)
}

// Thunks creators
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());

    // Возвращение всех промисов ответов
    Promise.all([promise]).then(() => {
        // Изменение в state (initialized: true)
        dispatch(actions.initializedSuccess());
    })
};


export default appReducer;