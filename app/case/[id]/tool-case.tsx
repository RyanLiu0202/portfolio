import './tool-case.css';

export default function ToolCase(){
  return <main className="casePage paper toolkitDetail">
    <a className="caseClose" href="/#tools" aria-label="返回运营工具建设">×</a>
    <header className="toolIntro">
      <span className="eyebrow">OPERATIONS TOOLKIT / 运营实践</span>
      <h1>把工作中的问题，<br/>做成可用的工具。</h1>
      <p>一项面向博主的合作平台，一款服务个人日常工作的邀约插件。不同的使用场景，相同的出发点：减少重复操作，让合作流程更顺畅。</p>
      <nav aria-label="工具案例导航"><a href="#alliance">创作者联盟 ↘</a><a href="#hongkuzi">红裤子 ↘</a></nav>
    </header>

    <section id="alliance" className="toolChapter">
      <header className="chapterHeading"><div><span className="eyebrow">平台运营 · AI 辅助迭代</span><h2>创作者联盟</h2></div><div className="chapterMeta"><span>2026.03 — 2026.07</span><span>已开放使用 · 博主端 / 公司运营端</span></div></header>
      <div className="toolOverview"><p>将分散的资料收集与项目报名集中到网站：博主注册后，复用社交账号和联系方式完成报名，后续在平台交稿、申请结款。原先设想的品牌端尚未开展。</p><div className="registered"><strong>1000+</strong><span>累计注册博主<br/><small>注册人数，不代表活跃或合作人数</small></span></div></div>
      <figure className="toolScreenshot"><a href="/cases/creator-alliance-redacted.png" target="_blank" rel="noreferrer"><img src="/cases/creator-alliance-redacted.png" alt="创作者联盟通告广场，项目封面、品牌名称和通告标题已遮盖"/></a><figcaption>通告广场 · 基于原截图进行脱敏编辑，封面、品牌名称及通告标题已遮盖。点击查看大图。</figcaption></figure>

      <div className="toolTwoCols">
        <article className="toolPaper"><span className="eyebrow">WHY / 工作中的问题</span><h3>每次报名，不必从头收集资料</h3><p>过去，每个项目都需要博主重新填写名称、主页链接和联系方式，信息分散在不同报名记录中。</p><p>注册后，平台集中保存博主的社交媒体账号及联系方式，报名时基本不再重复填写。粉丝数等变化信息仍需定期更新，同时逐步沉淀公司的专属博主库。</p></article>
        <article className="toolPaper"><span className="eyebrow">MY ROLE / 我的职责</span><h3>从测试反馈，到独立接手运营</h3><p><strong>前期：</strong>我负责测试、收集反馈与发现需求，领导负责流程梳理和功能设计。</p><p><strong>后期：</strong>独立负责发布通告、审核报名、匹配达人、跟进交稿、结款审核及处理咨询，并借助 AI 辅助开发、修改页面、排查与修复问题。</p></article>
      </div>

      <section className="toolBlock lifecycleBlock"><span className="eyebrow">USER OPERATIONS / 用户生命周期</span><h3>从新达人入驻，到持续合作与转介绍</h3><p>参考用户生命周期与 AARRR 模型，对平台用户进行分层运营。我的工作不止是处理单次报名，也包括关注达人在不同合作阶段的状态，从首单试跑逐步推进到稳定合作与转介绍拉新。</p><ol className="toolSteps lifecycleSteps">{[['Acquisition','获客','新达人入驻'],['Activation','激活','首单试跑'],['Retention','留存','分级维系'],['Revenue','变现','稳定合作'],['Referral','传播','达人转介绍拉新']].map(([en,stage,action])=><li key={en}><small>{en}</small><span>{stage}</span><strong>{action}</strong></li>)}</ol><p className="toolNote">这是我在创作者联盟采用的用户运营模式，不等同于平台已实现自动分层或自动触达功能。</p></section>

      <section className="toolBlock"><span className="eyebrow">WORKFLOW / 已实际使用</span><h3>从注册到结款的合作流程</h3><ol className="toolSteps">{['注册并完善资料','进入通告报名','运营审核与匹配','交稿与文案审核','申请结款'].map((s,i)=><li key={s}><span>0{i+1}</span>{s}</li>)}</ol><p className="toolNote">遇到约 800MB—1GB 以上的大稿件时，通过微信接收文件；标题与文案仍可在平台运营端审核。以上为流程示意，不是后台截图。</p></section>

      <section className="toolBlock"><span className="eyebrow">ITERATION NOTES / 从反馈到修复</span><h3>两个真实的问题，两个具体的改进</h3><div className="toolTwoCols">
        <article className="toolPaper"><span className="toolStatus">已修复 · 亲自验证</span><h4>登录后，回到刚才的通告</h4><p><strong>发现：</strong>博主从群内项目链接进入，登录后却回到个人主页，需要重新寻找通告。</p><p><strong>推进：</strong>我向 Claude 说明问题，并明确完整路径：进入通告 → 点击登录 → 输入信息 → 登录成功 → 返回原通告。</p><p><strong>验证：</strong>修复后，我亲自走完这条路径，确认登录后能回到原来的具体通告。</p></article>
        <article className="toolPaper"><span className="toolStatus">已修复 · 跨平台身份匹配</span><h4>不同平台的昵称，不应成为误判原因</h4><p><strong>发现：</strong>任务要求 Instagram 截图，但 AI 曾仅按博主的小红书名称识别，导致正确截图未通过。</p><p><strong>处理：</strong>定位跨平台名称不一致的问题并完成修复。目前这一问题不再需要人工复核。</p><p><strong>审核方式：</strong>识别截图中的点赞、收藏、评论数，汇总后与任务指标对照。这里展示的是实际规则，不代表 AI 在所有情况下都不会误判。</p></article>
      </div></section>

      <section className="toolTwoCols toolBlock">
        <article className="toolPaper"><span className="eyebrow">IN USE / 实际使用</span><h3>已有真实合作流程在平台完成</h3><p>平台已向博主和公司运营开放，累计注册博主 1000+，主要来自小红书、Instagram 与抖音。报名、交稿和申请结款已应用于真实项目。</p><p>把基础资料从“一次报名的记录”变为可持续维护的资源，是这项工具的长期价值。</p></article>
        <article className="toolPaper nextIdea"><span className="toolStatus">后续方向 · 尚未上线</span><h3>降低注册阻力与信任顾虑</h3><p>通过企业微信、微信和接单群，我了解到部分香港博主认为注册复杂，对网站安全与隐私存在顾虑，甚至因此放弃合作。</p><p>我提出微信小程序及微信一键登录方向，并获得老板认可；因公司资质资料和预算尚未落实，暂未上线。能否缓解这些问题，仍需后续验证。</p></article>
      </section>
    </section>

    <section id="hongkuzi" className="toolChapter pluginChapter">
      <header className="chapterHeading"><div><span className="eyebrow">个人提效工具 · 独立开发</span><h2>红裤子</h2></div><div className="chapterMeta"><span>蒲公英达人自动邀约插件</span><span>个人日常使用 · 非完整商业化产品</span></div></header>
      <div className="pluginLayout"><div>
        <article className="toolPaper"><h3>把整理好的博主链接，转成自动邀约</h3><p>参考靓号插件的使用思路，从日常蒲公英邀约需求出发，独立完成需求梳理、开发、测试及使用。</p><p>整理博主主页链接后输入红裤子，由插件自动执行邀约；也可以先进入博主的蒲公英主页，单独收藏后再邀约。</p></article>
        <ol className="pluginSteps"><li>整理博主主页链接</li><li>导入插件，或在主页单独收藏</li><li>执行自动邀约</li></ol>
        <article className="toolPaper nextIdea"><span className="toolStatus">当前功能边界</span><h3>整页收藏尚未跑通</h3><p>目前无法一键收藏博主广场整页约 20 位博主：该页面未能检测到独立 UID，而博主的蒲公英主页可以识别。</p><p>日常使用采用主页链接导入或单独收藏，不将整页批量采集列为已实现功能。</p></article>
      </div><figure className="toolScreenshot pluginShot"><a href="/cases/hongkuzi.png" target="_blank" rel="noreferrer"><img src="/cases/hongkuzi.png" alt="红裤子蒲公英 KOL 管理助手首页" loading="lazy"/></a><figcaption>插件首页 · 截图中的“0”为当前界面状态，不作为使用成果；其他按钮不作为已验证功能的证明。点击查看大图。</figcaption></figure></div>
    </section>
    <footer className="caseFooter"><a href="/#tools">← 返回运营工具建设</a><a href="mailto:ryanliu200212@gmail.com">联系我 ↗</a></footer>
  </main>;
}
