import React from "react";
import {actions} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/reduxStore";
import {reset} from "redux-form";

const mapStateToProps = (state: AppStateType) => {
  return {
      dialogsPage: state.dialogsPage,

      // Style
      background: state.app.theme.section.background
  }
};


// Функция compose (хорошая практика)
export default compose<React.ComponentType>(
    connect(mapStateToProps, {...actions, reset}),
    withAuthRedirect  // Работа с HOC
)(Dialogs)


// Аналог (плохая практика)
// // Работа с HOC
// let AuthRedirectComponent = withAuthRedirect(Dialogs);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

// export default DialogsContainer;