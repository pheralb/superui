import { Avatar, AvatarGroup } from "@superui/styles";

export function AvatarDemo() {
  return (
    <div className="component-preview">
      <Avatar
        src="https://avatars0.githubusercontent.com/u/22749943?s=460&v=4"
        alt="Superui Avatar"
        size="md"
        type="square"
        bordered
      />
      <Avatar
        src="https://avatars0.githubusercontent.com/u/22749943?s=460&v=4"
        alt="Superui Avatar"
        size="md"
        type="circle"
      />
    </div>
  );
}

export function AvatarGroupDemo() {
  return (
    <div className="component-preview">
      <AvatarGroup
        max={4}
        data={Array.from(Array(10).keys()).map((i) => ({
          name: `${i}`,
          alt: `${i}`,
          src: `https://source.boringavatars.com/beam/120/${i}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`,
        }))}
        size="md"
      />
    </div>
  );
}
