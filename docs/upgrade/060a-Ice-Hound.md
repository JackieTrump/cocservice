---
title: "部落冲突 coc 寒冰猎犬（冰狗）升级数据"
navTitle: "寒冰猎犬"
shownTitle: "寒冰猎犬（冰狗）"
description: "摆脱了熔岩引起的消化不良后，寒冰猎犬准备冻结敌军村庄。冷静点，否则......"
module: upgrade-home
imgFolder: home_tech/060a
wiki: https://clashofclans.fandom.com/wiki/Ice_Hound
canonical: /upgrade/060a-Ice-Hound
---

- *如想查看该兵种的普通版本，请访问：[熔岩猎犬](/upgrade/0085-Lava-Hound)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Ice_Hound.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="所有等级" imgSrc="Ice_Hound5.png" />
        <UnitImg imgTitle="迷你寒冰猎犬" imgSrc="Ice_Pup.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 寒冰猎犬的技能（奇冰制胜）：寒冰猎犬和迷你寒冰猎犬的攻击会让敌军和防御减速，寒冰猎犬被消灭后会冻结附近的一切。
2. 寒冰猎犬和迷你寒冰猎犬的普通攻击与 [冰冻法术](/upgrade/0104-Freeze-Spell) 不同，不能把敌方部队和建筑完全冻住，只是有一个减速效果。
3. 寒冰猎犬死亡后的冰冻效果与冰冻法术类似，可以把敌方部队和建筑完全冻住。
4. 寒冰猎犬的普通攻击和死亡冰冻效果和 [戈仑冰人](/upgrade/0087-Ice-Golem) 相同，只是冰冻时间不一样。

<SmallTitle>寒冰猎犬的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="空中单位" />
    <UnitProperty pKey="攻击偏好" pValue="防空火箭<sup>*</sup>" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="40" />
    <UnitProperty pKey="移动速度" pValue="2.5格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.25格" />
    <UnitProperty pKey="死亡爆炸半径" pValue="3.5格" />
    <UnitProperty pKey="攻击后的减速效果" pValue="50% 攻速<br>50% 移速" />
    <UnitProperty pKey="减速持续时间" pValue="2秒" />
    <UnitProperty pKey="最低熔岩猎犬等级" pValue="5" />
    <UnitProperty pKey="最低大本等级" pValue="12" />
    <UnitProperty pKey="强化费用" pValue="2.5万黑油" />
    <UnitProperty pKey="强化有效期" pValue="3天" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="20,20,900,Dark_Elixir" :isDonationCost="true" />
</UnitProperties>

\* 寒冰猎犬有三段攻击偏好。场上有防空火箭时攻击 [防空火箭](/upgrade/0304-Air-Defense)，没有防空火箭时攻击其他防御建筑，没有防御建筑时攻击非防御建筑。

<SmallTitle>迷你寒冰猎犬的属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="攻击偏好" pValue="无" />
    <UnitProperty pKey="伤害类型" pValue="范围伤害" />
    <UnitProperty pKey="伤害半径" pValue="0.3格" />
    <UnitProperty pKey="攻击的目标" pValue="地面和空中目标" />
    <UnitProperty pKey="占据人口" pValue="1" />
    <UnitProperty pKey="移动速度" pValue="4格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1秒/次" />
    <UnitProperty pKey="攻击距离" pValue="2.25格" />
    <UnitProperty pKey="每秒伤害" pValue="35" />
    <UnitProperty pKey="每次伤害" pValue="35" />
    <UnitProperty pKey="生命值" pValue="50" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

|     等级    | 每秒伤害 | 每次伤害 |死亡后<br>冰冻时间|死亡后分裂的迷你寒冰<br>猎犬数量 (进攻/防守)| 生命值 |所需<br>大本等级|
|     ---     |   ----  |   ----  |       ----      |                   ----                  |  ---- |      ----     |
|1<sup>*</sup>|     2   |     4   |      3.75秒    |                  6 / 6                  |  7500 |        7      |
|2<sup>*</sup>|     4   |     8   |      3.75秒    |                  7 / 7                  |  8000 |        9      |
|3<sup>*</sup>|     6   |    12   |      3.75秒    |                  8 / 8                  |  8500 |       10      |
|4<sup>*</sup>|     8   |    16   |      3.75秒    |                  9 / 9                  |  9000 |       11      |
|      5      |    10   |    20   |      3.75秒    |                 10 / 10                 |  9500 |       12      |
|      6      |    15   |    30   |      4.25秒    |                 12 / 11                 | 10000 |       13      |
|      7      |    20   |    40   |      4.75秒    |                 14 / 12                 | 10500 |       16      |
|      8      |    25   |    50   |      5.25秒    |                 16 / 13                 | 11500 |       18      |
</UnitTable>

\* 1 - 4级寒冰猎犬只在 [奖章活动](/p/7015) 中出现，不能通过常规方式得到。

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/02/23">
        <TimelineRow>在18本新增8级熔岩猎犬，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/06/16">
        <TimelineRow>1级寒冰猎犬的死亡冰冻时间由3.5秒提升到3.75秒。</TimelineRow>
        <TimelineRow>在16本新增7级熔岩猎犬，超级部队的等级也相应更新。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>迷你熔岩猎犬、迷你寒冰猎犬和迷你熔岩气球犬占用的人口数由2调整为1.</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>寒冰猎犬的训练时间由 6:40改为 5:47</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>6级寒冰猎犬防守时分裂出的迷你寒冰猎犬的数量减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/05/02">
        <TimelineRow>家乡所有空军的攻击距离减少0.5格（超级飞龙除外，这玩意削了1格）。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>如果熔岩猎犬和寒冰猎犬在选择目标时，场上剩余的防空火箭都被隐形了，它们不会忘记锁定之前没有看到的防空火箭。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/12/07">
        <TimelineRow>新超级兵：寒冰猎犬。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>