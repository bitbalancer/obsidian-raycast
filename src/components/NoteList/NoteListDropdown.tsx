import { List, Icon } from "@raycast/api";
import { SortOrder } from "../../utils/sorting";

/**
 * Sort order dropdown for the note list.
 *
 * The dropdown is uncontrolled and lets Raycast persist the last selected order
 * (per command) via `storeValue`, so the list opens with the order the user chose last.
 * Raycast reports the restored value through `onChange` when the dropdown mounts.
 */
export function NoteListDropdown(props: { setSortOrder: (o: SortOrder) => void }) {
  const { setSortOrder } = props;

  return (
    <List.Dropdown id="sortOrder" tooltip="Sort Notes" onChange={(v) => setSortOrder(v as SortOrder)} storeValue>
      <List.Dropdown.Section title="Sort Notes">
        <List.Dropdown.Item value="relevance" title="Relevance" icon={Icon.Stars} />
        <List.Dropdown.Item value="alphabetical-asc" title="File name (A to Z)" icon={Icon.ArrowDown} />
        <List.Dropdown.Item value="alphabetical-desc" title="File name (Z to A)" icon={Icon.ArrowUp} />
        <List.Dropdown.Item value="modified-desc" title="Modified time (new to old)" icon={Icon.Clock} />
        <List.Dropdown.Item value="modified-asc" title="Modified time (old to new)" icon={Icon.Clock} />
        <List.Dropdown.Item value="created-desc" title="Created time (new to old)" icon={Icon.Calendar} />
        <List.Dropdown.Item value="created-asc" title="Created time (old to new)" icon={Icon.Calendar} />
      </List.Dropdown.Section>
    </List.Dropdown>
  );
}
