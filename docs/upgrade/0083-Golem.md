---
title: "部落冲突 coc 戈仑石人（石头人）升级数据"
navTitle: "戈仑石人"
shownTitle: "戈仑石人（石头人）"
description: "戈仑石人乐于吸收伤害。被摧毁时，他们会爆炸并分裂成小戈仑石人。每个小戈仑石人拥有原戈仑石人1/5的攻击力和生命值。"
module: upgrade-home
imgFolder: home_tech/0083
wiki: https://clashofclans.fandom.com/wiki/Golem
canonical: /upgrade/0083-Golem
---

- *本页面的内容不是戈仑冰人，如想查看戈仑冰人的页面，请访问：[戈仑冰人](/upgrade/0087-Ice-Golem)。*
- *如想查看陨石戈仑，请访问：[陨石戈仑](/upgrade/meteor-golem)、[陨石戈仑（临时兵种）](/upgrade/meteor-golem-temp)。*
- *如想查看都城的高山戈仑，请访问：[都城高山戈仑](/upgrade/200d-Mountain-Golem)。*

<SwitchTabs contentClass="cp-unit-items" :stickyTabs="true" :pageTabs="true">
    <SwitchTab tabId="cp-unit-item-0" :activeTab="true">戈仑石人</SwitchTab>
    <SwitchTab tabId="cp-unit-item-1">小戈仑石人</SwitchTab>
</SwitchTabs>

<!-- ↓↓↓ 戈仑石人 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-0" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Golem_info.png" imgAlt="戈仑石人"
    description="戈仑石人乐于吸收伤害。被摧毁时，他们会爆炸并分裂成小戈仑石人。每个小戈仑石人拥有原戈仑石人1/5的攻击力和生命值。" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="戈仑石人和小戈仑石人的模型是一样的，只是大小不同。" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2级" imgSrc="Golem1.png" />
        <UnitImg imgTitle="3 - 4级" imgSrc="Golem3.png" />
        <UnitImg imgTitle="5级" imgSrc="Golem5.png" />
        <UnitImg imgTitle="6级" imgSrc="Golem6.png" />
        <UnitImg imgTitle="7级" imgSrc="Golem7.png" />
        <UnitImg imgTitle="8级" imgSrc="Golem8.png" />
        <UnitImg imgTitle="9级" imgSrc="Golem9.png" />
        <UnitImg imgTitle="10级" imgSrc="Golem10.png" />
        <UnitImg imgTitle="11级" imgSrc="Golem11.png" />
        <UnitImg imgTitle="12级" imgSrc="Golem12.png" />
        <UnitImg imgTitle="13级" imgSrc="Golem13.png" />
        <UnitImg imgTitle="14级" imgSrc="Golem14.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 戈仑石人死亡后会分裂成若干小戈仑石人（小石头人）。
2. 根据玩家解安装包的结果，小石头人占用6空间，可被 [隐形弹簧](/upgrade/0381-Spring-Trap) 弹飞。
3. 自2024年6月平衡性调整起，小石头人的生命值不再固定为大石头人的五分之一，但游戏内的介绍还是保留了五分之一这个说法。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="30" />
    <UnitProperty pKey="移动速度" pValue="1.5格/秒" />
    <UnitProperty pKey="攻击速度" pValue="2.4秒/次" />
    <UnitProperty pKey="攻击距离" pValue="1格" />
    <UnitProperty pKey="死亡伤害半径" pValue="1.5格" />
    <UnitProperty pKey="死亡溅射延迟" pValue="无" />
    <UnitProperty pKey="所需暗黑训练营等级" pValue="4" />
    <UnitProperty pKey="所需大本等级" pValue="8" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="15,15,675,Dark_Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 6,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 7,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |  每秒伤害 | 每次伤害 |死亡溅射<br>伤害|死亡后分裂的<br>小石头人数量| 生命值 |升级花费|  升级时间  |所需<br>实验室等级|所需<br>大本等级|
| ---- |   ----   |   ----  |      ----     |           ----           |  ---- |  ----  |    ----   |       ----      |      ----     |
|   1  |     35   |    84   |       350     |              2           |  5100 |    \   |      \    |        1        |       8       |
|   2  |     40   |    96   |       400     |              2           |  5400 |     4K |    0,16   |        6        |       8       |
|   3  |     45   |    108  |       450     |              2           |  5700 |     6K |    1,12   |        7        |       9       |
|   4  |     50   |    120  |       500     |              2           |  6000 |    10K |    2      |        7        |       9       |
|   5  |     55   |    132  |       550     |              2           |  6300 |  18.5K |    2, 6   |        8        |      10       |
|   6  |     60   |    144  |       600     |              2           |  6600 |  26.5K |    2,12   |        9        |      11       |
|   7  |     65   |    156  |       650     |              2           |  7000 |  38.5K |    2,18   |        9        |      11       |
|   8  |     70   |    168  |       700     |              3           |  7500 |    50K |    3      |       10        |      12       |
|   9  |     75   |    180  |       750     |              3           |  7900 |  62.5K |    3,12   |       10        |      12       |
|  10  |     80   |    192  |       800     |              3           |  8200 |    80K |    4      |       11        |      13       |
|  11  |     85   |    204  |       850     |              3           |  8500 |   105K |    5      |       12        |      14       |
|  12  |     90   |    216  |       900     |              3           |  8800 | 122.5K |    5,12   |       13        |      15       |
|  13  |     95   |    228  |       950     |              4           |  9200 |   175K |    6,10   |       14        |      16       |
|  14  |    100   |    240  |      1000     |              4           |  9600 |   230K |   10      |       15        |      17       |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 小戈仑石人 ↓↓↓ -->
<SwitchTabGroup id="cp-unit-item-1" class="cp-unit-items">
<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Golemite_info.png" imgAlt="小戈仑石人"
    description="小戈仑石人是由这个巨大生物孕育的更小的戈仑石人。当戈仑石人被摧毁时，小戈仑石人被赋予生命并继续战斗！" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup title="戈仑石人和小戈仑石人的模型是一样的，只是大小不同。" :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2级" imgSrc="Golem1.png" />
        <UnitImg imgTitle="3 - 4级" imgSrc="Golem3.png" />
        <UnitImg imgTitle="5级" imgSrc="Golem5.png" />
        <UnitImg imgTitle="6级" imgSrc="Golem6.png" />
        <UnitImg imgTitle="7级" imgSrc="Golem7.png" />
        <UnitImg imgTitle="8级" imgSrc="Golem8.png" />
        <UnitImg imgTitle="9级" imgSrc="Golem9.png" />
        <UnitImg imgTitle="10级" imgSrc="Golem10.png" />
        <UnitImg imgTitle="11级" imgSrc="Golem11.png" />
        <UnitImg imgTitle="12级" imgSrc="Golem12.png" />
        <UnitImg imgTitle="13级" imgSrc="Golem13.png" />
        <UnitImg imgTitle="14级" imgSrc="Golem14.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>重要说明</SmallTitle>

1. 戈仑石人死亡后会分裂成若干小戈仑石人（小石头人）。
2. 根据玩家解安装包的结果，小石头人占用6空间，可被 [隐形弹簧](/upgrade/0381-Spring-Trap) 弹飞。
3. 自2024年6月平衡性调整起，小石头人的生命值不再固定为大石头人的五分之一，但游戏内的介绍还是保留了五分之一这个说法。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="6" />
    <UnitProperty pKey="移动速度" pValue="1.5格/秒" />
    <UnitProperty pKey="攻击速度" pValue="3秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.5格" />
    <UnitProperty pKey="死亡伤害半径" pValue="1.5格" />
    <UnitProperty pKey="死亡溅射延迟" pValue="无" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable>

| 等级 |  每秒伤害 | 每次伤害 | 死亡溅射伤害 | 生命值 |
|  --- |    ----  |   ----  |     ----    |  ----  |
|   1  |      7   |    21   |      70     |  1020  |
|   2  |      8   |    24   |      80     |  1080  |
|   3  |      9   |    27   |      90     |  1140  |
|   4  |     10   |    30   |     100     |  1200  |
|   5  |     11   |    33   |     110     |  1260  |
|   6  |     12   |    36   |     120     |  1320  |
|   7  |     13   |    39   |     130     |  1380  |
|   8  |     14   |    42   |     140     |  1440  |
|   9  |     15   |    45   |     150     |  1500  |
|  10  |     16   |    48   |     160     |  1600  |
|  11  |     17   |    51   |     170     |  1680  |
|  12  |     18   |    54   |     180     |  1760  |
|  13  |     19   |    57   |     190     |  1840  |
|  14  |     20   |    60   |     200     |  1920  |
</UnitTable>
</SwitchTabGroup>

<!-- ↓↓↓ 公共部分 ↓↓↓ -->
<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2025/11/17">
        <TimelineRow>14级戈仑石人的升级时间和升级费用减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/10/06">
        <TimelineRow>3 ~ 13级戈仑石人的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>在17本新增14级戈仑石人。</TimelineRow>
        <TimelineRow>2、7 ~ 13级戈仑石人的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>戈仑石人的训练时间由 5:00改为 4:20</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>2 ~ 13级戈仑石人的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>11 ~ 12级戈仑石人的升级时间减少。</TimelineRow>
        <TimelineRow>11 ~ 12级戈仑石人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/03">
        <TimelineRow>7 ~ 11级戈仑石人的生命值提升，小戈仑石人的数据没有变化，因此现在小石头人的生命值不再固定为大石头人的五分之一。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>新增16本，并在16本新增13级戈仑石人。</TimelineRow>
        <TimelineRow>4 ~ 12级戈仑石人的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 5、11级戈仑石人的升级费用降低。</TimelineRow>
        <TimelineRow>天使治疗戈仑石人、小戈仑石人、戈仑冰人的几率降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>8 ~ 10级戈仑石人的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>新增15本，并在15本新增12级戈仑石人。</TimelineRow>
        <TimelineRow>5 ~ 11级戈仑石人的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 4级戈仑石人的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/09/27">
        <TimelineRow>14本新增11级戈仑石人。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>2 ~ 6、8级戈仑石人的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 9级戈仑石人的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>2 ~ 8级戈仑石人的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/06/22">
        <TimelineRow>13本新增10级戈仑石人。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>2 ~ 7级戈仑石人的升级费用降低。</TimelineRow>
        <TimelineRow>天使治疗小戈仑石人的几率降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/09/11">
        <TimelineRow>1 ~ 3级戈仑石人的伤害降低，5 ~ 9级戈仑石人的伤害提高。</TimelineRow>
        <TimelineRow>8 ~ 9级戈仑石人爆炸后分裂的小戈仑石人从2个增加至3个。</TimelineRow>
        <TimelineRow>1 ~ 3级小戈仑石人的生命值提高。</TimelineRow>
        <TimelineRow>现在小戈仑石人的每秒伤害固定为戈仑石人的五分之一。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/06/18">
        <TimelineRow>12本新增9级戈仑石人。</TimelineRow>
        <TimelineRow>5 ~ 8级戈仑石人和小戈仑石人被摧毁时造成的伤害增加。</TimelineRow>
        <TimelineRow>戈仑石人被摧毁时造成伤害的半径从1.2格提升至1.5格。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>包含大量降低发展成本和提高发展速度的调整，其中所有等级戈仑石人的训练费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>