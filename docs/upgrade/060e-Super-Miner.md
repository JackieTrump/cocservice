---
title: "部落冲突 coc 超级矿工（超矿）升级数据"
navTitle: "超级矿工"
shownTitle: "超级矿工（超矿）"
description: "拿着大钻机，留着拉风的胡子，这位超级矿工随时准备暗中破坏敌方防御！"
module: upgrade-home
imgFolder: home_tech/060e
wiki: https://clashofclans.fandom.com/wiki/Super_Miner
canonical: /upgrade/060e-Super-Miner
---

- *如想查看该兵种的普通版本，请访问：[掘地矿工](/upgrade/miner)。*
- *如想查看都城的超级矿工，请访问：[都城超级矿工](/upgrade/super-miner-capital)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Super_Miner_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Super_Miner7.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 超级矿工的技能（终极大爆炸）：被消灭时丢下一个炸药桶。
2. 超级矿工使用钻机进行攻击，攻击时间越长伤害越高，类似于 [地狱飞龙](/upgrade/0604-Inferno-Dragon)。
3. 超级矿工能免疫 [飓风陷阱](/upgrade/0386-Tornado-Trap) 的转圈效果。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="24" />
    <UnitProperty pKey="移动速度" pValue="4格/秒 (进攻)<br>2.8格/秒 (防守)" />
    <UnitProperty pKey="攻击速度" pValue="0.25秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.6格" />
    <UnitProperty pKey="死亡后的爆炸半径" pValue="2格" />
    <UnitProperty pKey="最低矿工等级" pValue="7" />
    <UnitProperty pKey="最低大本等级" pValue="13" />
    <UnitProperty pKey="强化费用" pValue="2.5万黑油" />
    <UnitProperty pKey="强化有效期" pValue="3天" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="12,12,36000,Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 |  初始秒伤  |  1.5秒后秒伤  | 3秒后秒伤 |  死亡伤害 | 生命值 |所需大本等级|
| ---- |    ----   |      ----     |    ----   |    ----   |  ---- |    ----   |
|   7  |    170    |      340      |     520   |    1400   |  3000 |     13    |
|   8  |    185    |      370      |     560   |    1600   |  3300 |     14    |
|   9  |    205    |      405      |     605   |    1800   |  3600 |     15    |
|  10  |    225    |      440      |     650   |    2000   |  4000 |     16    |
|  11  |    245    |      475      |     695   |    2200   |  4400 |     17    |
|  12  |    265    |      510      |     740   |    2400   |  5000 |     18    |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>18本推出，并在18本新增12级掘地矿工，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/06/30">
        <TimelineRow>7 ~ 11级超级矿工的生命值增加。</TimelineRow>
        <TimelineRow>9 ~ 11级超级矿工的每秒伤害提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>17本新增11级掘地矿工，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>16本推出，并在16本新增10级掘地矿工，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>9级超级矿工的生命值由3200提升到3500。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/12/12">
        <TimelineRow>新超级兵：超级矿工。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>