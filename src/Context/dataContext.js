import apiBase from "../Api/Api";
import createDataContext from "./createDataContext";

const dataReducer = ( state, action ) => {
    switch (action.type) {
        case "get_data_pokemon": {
            console.log('payload', action.payload);
            return {
                ...state,
                filteredPokemonData: action.payload,
            };
        }
        default:
            break;
    }
}

const filterPokemonData = (dispatch) => async({category, parameter, parameter2, onAwait, onSuccess, onReject}) => {
    let query = category + parameter;
    if (onAwait) onAwait();

    await apiBase
        .get("/"+ query)
        .then((response) => {
            dispatch({ type: "get_data_pokemon", payload: response.data });
            if (onSuccess) onSuccess();
        })
        .catch((error) => {
            if (onReject) onReject(error);
        });
};

export const { Provider, Context } = createDataContext(
    dataReducer,
    {
        filterPokemonData
    },
    {
        filteredPokemonData: []
    }
)