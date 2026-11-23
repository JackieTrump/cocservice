---
title: "部落冲突 coc 超级女巫升级数据"
navTitle: "超级女巫"
shownTitle: "超级女巫"
description: "凝聚魔法，召唤强大力量。超级女巫召唤的不是成群的小骷髅兵，而是一个骨骼密度惊人的超大骷髅兵。"
module: upgrade-home
imgFolder: home_tech/0605
wiki: https://clashofclans.fandom.com/wiki/Super_Witch
canonical: /upgrade/0605-Super-Witch
---

- *如想查看该兵种的普通版本，请访问：[女巫](/upgrade/0084-Witch)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Witch_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="超级女巫" imgSrc="Super_Witch5.png" />
        <UnitImg imgTitle="大宝宝" imgSrc="Big_Boy.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

超级女巫的技能（大宝宝）：超级女巫会召唤一个体型超大的骷髅兵。

<SmallTitle>超级女巫的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面远程单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.3格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="40" />
    <UnitProperty pKey="移动速度" pValue="1.5格/秒" />
    <UnitProperty pKey="攻击速度" pValue="0.7秒/次" />
    <UnitProperty pKey="攻击距离" pValue="4格" />
    <UnitProperty pKey="最低女巫等级" pValue="5" />
    <UnitProperty pKey="最低大本等级" pValue="12" />
    <UnitProperty pKey="强化费用" pValue="2.5万黑油" />
    <UnitProperty pKey="强化有效期" pValue="3天" />
    <UnitProperty pKey="骷髅召唤频率" pValue="详见说明<sup>*</sup>" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="20,20,900,Dark_Elixir" :isDonationCost="true" />
</UnitProperties>

\* 第一个大骷髅在部署后5秒召唤，之后每30秒召唤一个。

<SmallTitle>大宝宝的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="20" />
    <UnitProperty pKey="移动速度" pValue="1.5格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1格" />
    <UnitProperty pKey="每秒伤害" pValue="350" />
    <UnitProperty pKey="每次伤害" pValue="700" />
    <UnitProperty pKey="生命值" pValue="4 100" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 |  每秒伤害  |  每次伤害  | 生命值 |所需大本等级|
| ---- |    ----   |    ----   |  ---- |    ----   |
|   5  |    360    |    252    |  3200 |     12    |
|   6  |    390    |    273    |  3400 |     15    |
|   7  |    430    |    301    |  3750 |     16    |
|   8  |    470    |    329    |  4100 |     18    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/02/23">
        <TimelineRow>在18本新增8级女巫，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>  
    <TimelineItem date="2026/01/12">
        <TimelineRow>7级超级女巫的每秒伤害和生命值增加。</TimelineRow>
        <TimelineRow>大宝宝占用的人口数由10调整为20.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>大宝宝（超级女巫的骷髅巨人）占用的人口数由20调整为10，这意味着它现在可以被隐形弹簧弹飞了。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>超级女巫的训练时间由 6:40改为 5:33。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16本推出，并在16本新增7级女巫，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>    
    <TimelineItem date="2022/10/10">
        <TimelineRow>15本推出，并在15本新增6级女巫，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>超级女巫的训练时间由1200秒减少到800秒。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>超级部队的有效时间从7天缩短为3天。</TimelineRow>
        <TimelineRow>所有部队的强化费用统一调整为25,000暗黑重油。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>新超级兵：超级女巫。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>