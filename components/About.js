export default function About() {
  const skills = [
    {
      name: "Skill1",
      percentage: 65,
    },
    {
      name: "Skill2",
      percentage: 25,
    },
    {
      name: "Skill3",
      percentage: 85,
    },
  ];
  return (
    <div className="grid grid-cols-4 gap-20">
      <div className="col-span-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu nullam
        augue dolor libero at in. Egestas in elit vitae tincidunt morbi egestas
        nec massa. Pretium, placerat quis sem gravida vel quam nisl in semper.
        Platea enim nunc aliquam volutpat, ut sed morbi. Sit leo aliquam at
        amet, eu dictumst accumsan eu, quis. Nam ac mattis adipiscing euismod
        arcu ac laoreet vitae at. Nibh etiam dictumst nibh ut. Vitae massa
        rhoncus, et massa. Diam fermentum malesuada scelerisque orci massa.
      </div>
      <div className="col-span-2 ">
        {skills.map((skill, i) => (
          <div key={i} className=" w-full bg-gray-100 mb-4">
            <div className="flex justify-between px-2">
              <div>{skill.name}</div>
              <div>{skill.percentage}%</div>
            </div>
            <div
              className="bg-gray-700 h-1"
              style={{ width: `${skill.percentage}% ` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
