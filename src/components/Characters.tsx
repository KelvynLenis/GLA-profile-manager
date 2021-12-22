import { Dropdown } from "react-bootstrap";
import { charactersList } from "../utils/charactersList";
import { CharacterCard } from "./CharacterCard";
import { ChangeEvent, useState } from "react";

interface ITask {
	taskName: string;
	deadline: number;
}

export interface ICharacter {
	charName: string;
}

export function Characters() {
    const characters = charactersList;
	
	const [deadline, setDealine] = useState<number>(0);
	const [todoList, setTodoList] = useState<ITask[]>([]);

	const [char, setChar] = useState<string>("");
	const [characterList, setCharacterList] = useState<ICharacter[]>([]);

	const completeTask = (taskNameToDelete: string): void => {
		setTodoList(
		  todoList.filter((task) => {
			return task.taskName != taskNameToDelete;
		  })
		);
	};

	const deleteChar = (charNameToDelete: string): void => {
		setCharacterList(
			characterList.filter((char) => {
			return char.charName != charNameToDelete;
		  })
		);
	};

	const addChar = (): void => {
		const newChar = { charName: char};
		setCharacterList([...characterList, newChar]);
		setChar("");
	};

	const handleChangeCharacter = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.name === "char") {
		  setChar(event.target.value);
		}
	};

	const handleChangeCharacterSelect = (event: ChangeEvent<HTMLSelectElement>): void => {
		if (event.target.name === "char") {
		  setChar(event.target.value);
		}
	};
	

	return (
		<>
			<main>
			
				<div className="search-box">
					<img src="/assets/search.svg" alt="search icon" />
					<input type="text" placeholder="Search a character..." />
				</div>

				<div className="content-main">
					{characterList.map((char: ICharacter, key: number) => {
						return <CharacterCard key={key} name={char.charName} char={char} deleteChar={deleteChar} />;
					})}

					<div className="add-char">
						<select name="char" value={char} onChange={handleChangeCharacterSelect} className="character-label">
						<option value="">Character</option>
						{characters.map((char: { value: string | number | readonly string[] | undefined; label: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, index: any) => {
							return (
								<option value={char.value}>{char.label}</option>
							)
						})}
						</select>

						<button onClick={addChar}>
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
								<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
							</svg>
						</button>
					</div>
				</div>
			</main>
		</>
	)
}