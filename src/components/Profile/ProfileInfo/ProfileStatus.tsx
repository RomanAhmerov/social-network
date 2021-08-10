import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';


// Type (TS)
type PropsType = {
    status: string

    updateStatus: (newStatus: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}

// CC
class ProfileStatus extends React.Component<PropsType, StateType> {
    // local state
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => { // Обявление через стрелочнкую функцию для устранения потери контекста this
        // Изменение режима редактирования. local state (обновление state) (хорошая практика) "Асинхронный метод"
        this.setState(
            {
                editMode: true,
            }
        );
        //this.forceUpdate(); //  Обновление UI (плохая практика)
    }

    deactivateEditMode() { // Происходит потеря контекста this в callback используем bind(this)
        // Изменение режима редактирования
        this.setState(
            {
                editMode: false
            }
        );

        // Изменение (обновление) статуса
        this.props.updateStatus(this.state.status);
    }

    // Изменение значения локального state при вводе символов в input
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    //Методы жизненного цикла
    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
        // Всегда нужно использовать условный оператор (для устранения бесконечного цикла)
        if (prevProps.status !== this.props.status) {
           this.setState({
               status: this.props.status
           })
        }
    }

    // Отрисовка компоненты
    render() {
        return (
            <div>
                {/* Режим редактирования ВЫКЛ - false */}
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '--------'}</span>
                    </div>
                }

                {/* Режим редактирования ВКЛ - true */}
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} value={this.state.status} />
                    </div>
                }
            </div>
        );
    }
};

export default ProfileStatus;