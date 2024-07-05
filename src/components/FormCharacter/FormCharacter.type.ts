export interface CharacterBody {
  name: string;
  image?: File | null;
  description: string;
  birthDate: Date | null;
  deathDate?: Date | null;
}

export interface AlertMessagesProps {
  show: boolean;
  message: string;
  severity: "success" | "error";
}

export interface FormCharacterProps {
  characterId?: string;
  closeFormCharacter: () => void;
  setAlert: (props: AlertMessagesProps) => void;
}
