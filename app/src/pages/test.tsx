import { NavigationBar } from "@superui/styles";

export default function Test() {
  return (
    <div className="w-full h-full">
      <NavigationBar
        variant="primary"
        logo="https://raw.githubusercontent.com/surrealdb/surrealdb/main/img/icon.png"
      >
        <ul className="flex gap-12">
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </NavigationBar>
    </div>
  );
}
