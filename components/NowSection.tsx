const capabilities = [
  {
    title: "团队建设",
    detail: "招聘、面试、培养、团队管理、分工机制、跨部门协作",
  },
  {
    title: "SOP 搭建",
    detail: "Marketing SOP、线索流转、内容生产、活动执行、项目管理流程",
  },
  {
    title: "Reddit 增长",
    detail: "社区策略、Sub Mapping、养号、内容规划、引流、风险控制",
  },
  {
    title: "演讲表达",
    detail: "展会 Demo、产品发布、直播、客户分享、主持、培训",
  },
];

export function NowSection() {
  return (
    <section id="exploring" className="now-section section-pad">
      <h2>Beyond Marketing</h2>
      <div className="beyond-list" aria-label="Beyond Marketing 能力列表">
        <div className="beyond-row beyond-head">
          <span>能力</span>
          <p>具体能提供什么</p>
        </div>
        {capabilities.map((item) => (
          <div className="beyond-row" key={item.title}>
            <span>{item.title}</span>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
