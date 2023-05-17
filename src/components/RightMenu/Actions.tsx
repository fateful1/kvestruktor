import { useDispatch, useSelector } from "react-redux";
import { SetStateAction, useState } from "react";
import {
  addText,
  changeActionClick,
  changeAddAHint,
  changeBecomeUnvisible,
  changeBecomeVisible,
  changeObjectFliesInBackpack,
  changeTask,
  showCurrentId,
  showObjs,
} from "@/features/objSlice";
import styles from "./RightMenu.module.scss";
import { DeleteIcon, PlusIcon } from "@/ui/icons";

const Actions = () => {
  const [eventSelectionWindow, setEventSelectionWindow] = useState(false);
  const objectList = useSelector(showObjs);
  const currentObjectId = useSelector(showCurrentId);
  const dispatch = useDispatch();
  const [hit, setHit] = useState(objectList[currentObjectId].info);
  const options = [
    {
      label: "Объект улетает в рюкзак",
      value: "1",
      key: 1,
    },
    {
      label: "Объект становится невидимым",
      value: "2",
      key: 2,
    },
    {
      label: "Объект становится видимым",
      value: "3",
      key: 3,
    },
    {
      label: "Появляется задание",
      value: "4",
      key: 4,
    },
    {
      label: "Появляется подсказка",
      value: "5",
      key: 5,
    },
  ];
  const [action, setAction] = useState("");

  // function handleSelectChange(event: React.ChangeEvent<HTMLInputElement>) {
  function handleSelectChange(event: {
    target: { value: SetStateAction<string> };
  }) {
    setAction(event.target.value);
    switch (event.target.value) {
      case "1":
        dispatch(changeObjectFliesInBackpack(true));
        break;
      case "2":
        dispatch(changeBecomeUnvisible(true));
        break;
      case "3":
        dispatch(changeBecomeVisible(true));
        break;
      case "4":
        dispatch(changeTask(true));
        break;
      case "5":
        dispatch(changeAddAHint(true));
        break;
      default:
        break;
    }
    console.log(event.target.value);
  }

  function createClickAction() {
    console.log("createClickAction");
    dispatch(changeActionClick(true));
    setEventSelectionWindow(false);
    console.log(
      currentObjectId != null && objectList[currentObjectId].actionClick
    );
  }

  function createMoveAction() {
    console.log("createMoveAction");
    setEventSelectionWindow(false);
  }

  function inputChangeHit(event: { target: { value: any } } | undefined) {
    if (event != undefined) setHit(String(event.target.value));
  }

  function handleKeyDown(event: { key: string }) {
    if (event.key === "Enter") {
      dispatch(addText(hit));
    }
  }

  return (
    <>
      <div className={styles.settings__field}>
        <div className={styles.add_an_event_container}>
          <div className={styles.settings__sub_title}>Список событий</div>
          <div
            className={styles.add_an_event_button}
            onClick={() => setEventSelectionWindow(!eventSelectionWindow)}
          >
            <PlusIcon />
          </div>
        </div>
        {eventSelectionWindow ? (
          <div className={styles.event_selection}>
            <div
              className={styles.event_selection_event}
              onClick={() => createClickAction()}
            >
              {" "}
              Клик на объект
            </div>
            <div className={styles.event_selection_borderline}></div>
            <div
              className={styles.event_selection_event}
              onClick={() => createMoveAction()}
            >
              {" "}
              Перемещение объекта на ...
            </div>
          </div>
        ) : null}
        {currentObjectId != null && objectList[currentObjectId].actionClick ? (
          <div className={styles.add_an_event_card}>
            <div className={styles.add_an_event_card_header}>
              <div className={styles.add_an_event_card_header_title}>
                Клик на объект
              </div>
              {/*<img src={'arrow_up.svg'} width={18} height={10} alt="" />*/}
            </div>

            <div className={styles.add_an_event_card_content}>
              <div className={styles.settings__sub_title}>Действия</div>
              {objectList[currentObjectId].inBack ? (
                <>
                  {" "}
                  <div className={styles.action_item}>
                    <div className={styles.action_title}>
                      Объект улетает в рюкзак
                    </div>
                    <button
                      className={styles.action_delete_button_image}
                      onClick={() => {
                        dispatch(changeObjectFliesInBackpack(false));
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                  <div className={styles.bottom_line}></div>
                </>
              ) : null}
              {objectList[currentObjectId].simpleInfo ? (
                <>
                  <div className={styles.action_item}>
                    <div className={styles.action_title}>
                      Появляется подсказка
                    </div>
                    <button
                      className={styles.action_delete_button_image}
                      onClick={() => {
                        dispatch(changeAddAHint(false));
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                  <input
                    className={styles.hit_input}
                    type={"text"}
                    autoFocus
                    id="hit"
                    onChange={inputChangeHit}
                    defaultValue={hit}
                    onKeyDown={handleKeyDown}
                  />
                  <div className={styles.bottom_line}></div>
                </>
              ) : null}
              {objectList[currentObjectId].task ? (
                <>
                  <div className={styles.action_item}>
                    <div className={styles.action_title}>
                      Появляется задание
                    </div>
                    <button
                      className={styles.action_delete_button_image}
                      onClick={() => {
                        dispatch(changeTask(false));
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                  <div className={styles.bottom_line}></div>
                </>
              ) : null}
              {objectList[currentObjectId].becomeVisible ? (
                <>
                  <div className={styles.action_item}>
                    <div className={styles.action_title}>
                      Становится видимым
                    </div>
                    <button
                      className={styles.action_delete_button_image}
                      onClick={() => {
                        dispatch(changeBecomeVisible(false));
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                  <div className={styles.bottom_line}></div>
                </>
              ) : null}
              {objectList[currentObjectId].becomeUnvisible ? (
                <>
                  <div className={styles.action_item}>
                    <div className={styles.action_title}>
                      Становится невидимым
                    </div>
                    <button
                      className={styles.action_delete_button_image}
                      onClick={() => {
                        dispatch(changeBecomeUnvisible(false));
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                  <div className={styles.bottom_line}></div>
                </>
              ) : null}
              <div className={styles.type_of_action_title}>Тип действия</div>
              <div className="select-container">
                <select
                  className={styles.select}
                  value={action}
                  onChange={handleSelectChange}
                >
                  <option value="" selected disabled hidden>
                    Добавить из списка
                  </option>
                  {options.map((option) => (
                    <option key={option.key} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className={styles.delete_button}
                onClick={() => dispatch(changeActionClick(false))}
              >
                <div className={styles.delete_button_container}>
                  <DeleteIcon />
                  удалить событие
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.add_an_event_title}>
            Добавьте событие, нажав на «+».
          </div>
        )}
      </div>
    </>
  );
};

export default Actions;
