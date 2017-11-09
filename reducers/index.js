// The starting state at page load is a new game.
const INITIAL_STATE = newGame({});

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        default:
            return state;
    }
}
