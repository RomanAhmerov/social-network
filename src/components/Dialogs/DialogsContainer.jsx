import React from "react";
import {sendMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
      dialogsPage: state.dialogsPage,
  }
};

// Длинная версия mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    };
};

// Функция compose (хорошая практика)
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect  // Работа с HOC
)(Dialogs)


// Аналог (плохая практика)
// // Работа с HOC
// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

// export default DialogsContainer;