---
title: "部落冲突 coc 野猪骑士升级数据"
navTitle: "野猪骑士"
shownTitle: "野猪骑士"
description: "驯服了狂暴的跳跳猪后，野猪骑士可以直接攻击那些躲在城墙后面的鼠辈了！有暗黑重油的滋养，这些勇士战无不胜！"
module: upgrade-home
imgFolder: home_tech/0081
wiki: https://clashofclans.fandom.com/wiki/Hog_Rider
canonical: /upgrade/0081-Hog-Rider
---

- *如想查看该兵种的强化版本，请访问：[超级野猪骑士](/upgrade/060f-Super-Hog-Rider)。*
- *如想查看夜世界的野猪飞骑，请访问：[夜世界野猪飞骑](/upgrade/100a-Hog-Glider)。*
- *如想查看都城的野猪突袭队，请访问：[都城野猪突袭队](/upgrade/200b-Hog-Raiders)。*

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="Hog_Rider_info.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1 - 2级" imgSrc="Hog_Rider1.png" />
        <UnitImg imgTitle="3 - 4级" imgSrc="Hog_Rider3.png" />
        <UnitImg imgTitle="5级" imgSrc="Hog_Rider5.png" />
        <UnitImg imgTitle="6级" imgSrc="Hog_Rider6.png" />
        <UnitImg imgTitle="7级" imgSrc="Hog_Rider7.png" />
        <UnitImg imgTitle="8级" imgSrc="Hog_Rider8.png" />
        <UnitImg imgTitle="9级" imgSrc="Hog_Rider9.png" />
        <UnitImg imgTitle="10级" imgSrc="Hog_Rider10.png" />
        <UnitImg imgTitle="11级" imgSrc="Hog_Rider11.png" />
        <UnitImg imgTitle="12级" imgSrc="Hog_Rider12.png" />
        <UnitImg imgTitle="13级" imgSrc="Hog_Rider13.png" />
        <UnitImg imgTitle="14级" imgSrc="Hog_Rider14.png" />
        <UnitImg imgTitle="15级" imgSrc="Hog_Rider15.png" />
    </UnitImgGroup>
</Panel>

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="部队类型" pValue="地面近战单位" />
    <UnitProperty pKey="攻击偏好" pValue="防御建筑 (偏好类型1)" :isDefensePreferredTroop="true" />
    <UnitProperty pKey="伤害类型" pValue="单体伤害" />
    <UnitProperty pKey="攻击的目标" pValue="仅地面目标" />
    <UnitProperty pKey="占据人口" pValue="5" />
    <UnitProperty pKey="移动速度" pValue="3格/秒" />
    <UnitProperty pKey="攻击速度" pValue="1秒/次" />
    <UnitProperty pKey="攻击距离" pValue="0.6格" />
    <UnitProperty pKey="所需暗黑训练营等级" pValue="2" />
    <UnitProperty pKey="所需大本等级" pValue="7" />
    <UnitProperty pKey="训练时间" pValue="无" trainingSystem="2025" />
    <UnitProperty pKey="捐赠费用" pValue="3,3,135,Dark_Elixir" :isDonationCost="true" />
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<script setup>
const tableExtraInfo = [
    {
        "column": 4,
        "type": "cost",
        "gpClass": "research",
        "icon": "Dark_Elixir"
    },
    {
        "column": 5,
        "type": "time",
        "gpClass": "research"
    }
];
</script>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 |  每秒伤害 | 每次伤害 | 生命值 | 升级花费|  升级时间 |所需实验室等级|所需大本等级|
|  --- |    ---   |   ---   |   --- |    ---  |     ---   |     ---    |    ---    |
|   1  |     60   |    60   |   270 |      \  |     \     |      1     |     7     |
|   2  |     70   |    70   |   312 |     2K  |    0,10   |      5     |     7     |
|   3  |     80   |    80   |   370 |   3.5K  |    0,18   |      6     |     8     |
|   4  |     92   |    92   |   430 |     5K  |    1      |      6     |     8     |
|   5  |    105   |   105   |   500 |    10K  |    2      |      7     |     9     |
|   6  |    118   |   118   |   590 |  18.5K  |    2, 6   |      8     |    10     |
|   7  |    140   |   140   |   700 |    35K  |    2,12   |      9     |    11     |
|   8  |    155   |   155   |   810 |  47.5K  |    3      |     10     |    12     |
|   9  |    165   |   165   |   890 |    50K  |    3,12   |     10     |    12     |
|  10  |    176   |   176   |   970 |    85K  |    4      |     11     |    13     |
|  11  |    187   |   187   |  1080 | 107.5K  |    5      |     12     |    14     |
|  12  |    200   |   200   |  1230 |   125K  |    5,12   |     13     |    15     |
|  13  |    213   |   213   |  1380 |   175K  |    6,12   |     14     |    16     |
|  14  |    225   |   225   |  1500 |   240K  |   10      |     15     |    17     |
|  15  |    250   |   250   |  1750 |   340K  |   14,12   |     16     |    18     |
</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2026/02/23">
        <TimelineRow>在18本新增15级野猪骑士。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/11/17">
        <TimelineRow>14级野猪骑士的升级时间和升级费用减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/10/06">
        <TimelineRow>9 ~ 13级野猪骑士的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/27">
        <TimelineRow>部队的训练时间取消，但增加了捐赠费用。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/03/24">
        <TimelineRow>在17本新增14级野猪骑士。</TimelineRow>
        <TimelineRow>7 ~ 13级野猪骑士的升级时间减少。</TimelineRow>
        <TimelineRow>10级野猪骑士的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2025/02/10">
        <TimelineRow>野猪骑士的训练时间由 0:45改为 0:42</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/11/25">
        <TimelineRow>3、4、6、10 ~ 13级野猪骑士的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 13级野猪骑士的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/18">
        <TimelineRow>6 ~ 9、11 ~ 12级野猪骑士的升级时间减少。</TimelineRow>
        <TimelineRow>9、11 ~ 12级野猪骑士的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/06/03">
        <TimelineRow>7 ~ 10级野猪骑士的每秒伤害提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2024/02/27">
        <TimelineRow>16本新增13级野猪骑士。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/12/12">
        <TimelineRow>6 ~ 12级野猪骑士的升级时间减少。</TimelineRow>
        <TimelineRow>2 ~ 6、11级野猪骑士的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2023/06/12">
        <TimelineRow>15本新增12级野猪骑士。</TimelineRow>
        <TimelineRow>8 ~ 10级野猪骑士的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2022/10/10">
        <TimelineRow>6 ~ 11级野猪骑士的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/12/09">
        <TimelineRow>2 ~ 6级野猪骑士的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/09/27">
        <TimelineRow>14本新增11级野猪骑士。</TimelineRow>
        <TimelineRow>3 ~ 5级野猪骑士的生命值提升。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2021/04/12">
        <TimelineRow>2 ~ 5、8级野猪骑士的升级费用降低。</TimelineRow>
        <TimelineRow>2 ~ 8级野猪骑士的升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/10/12">
        <TimelineRow>2 ~ 8级野猪骑士的升级费用和升级时间减少。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2020/03/30">
        <TimelineRow>6级野猪骑士的升级费用降低。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/12/09">
        <TimelineRow>13本开放，并且新增10级野猪骑士。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/09/11">
        <TimelineRow>9级野猪骑士的生命值由920降低至890。</TimelineRow>
    </TimelineItem>
    <TimelineItem date="2019/04/02">
        <TimelineRow>1 ~ 8级野猪骑士的升级时间减少。</TimelineRow>
        <TimelineRow>4 ~ 6级野猪骑士的训练费用降低。</TimelineRow>
        <TimelineRow>新增9级野猪骑士，10级实验室可解锁。</TimelineRow>
    </TimelineItem>
    <TimelineItem :historyBottom="true" />
</Timeline>