---
title: "部落冲突 coc 夜世界小博控制室（巴布控制台）升级数据"
navTitle: "小博控制室"
shownTitle: "小博控制室（巴布控制台）"
description: "建筑大师最新发明的控制中心！全面升级后，小博会成为家乡村庄的又一位建筑工人！"
module: upgrade-bh
imgFolder: bh_buildings/1284
wiki: https://clashofclans.fandom.com/wiki/B.O.B_Control
canonical: /upgrade/bob-control-bh
---

- 如想查看家乡的小博木屋，请访问：[小博木屋](/upgrade/0501-B.O.Bs-Hut)。

<UnitInfo :folder="$frontmatter.imgFolder" imgSrc="B.O.B_Control5.png" :imgAlt="$frontmatter.navTitle" :description="$frontmatter.description" :isSmallImg="true" />

<SmallTitle>各等级图片</SmallTitle>

<Panel>
    <UnitImgGroup :folder="$frontmatter.imgFolder">
        <UnitImg imgTitle="1级" imgSrc="B.O.B_Control1.png"/>
        <UnitImg imgTitle="2级" imgSrc="B.O.B_Control2.png"/>
        <UnitImg imgTitle="3级" imgSrc="B.O.B_Control3.png"/>
        <UnitImg imgTitle="4级" imgSrc="B.O.B_Control4.png"/>
        <UnitImg imgTitle="5级" imgSrc="B.O.B_Control5.png"/>
    </UnitImgGroup>
</Panel>

<SmallTitle>建筑数量对照表</SmallTitle>

<BuildingNum>
    <BuildingNumRow title="大本等级" num="1 - 5, 6 - 8, 9 - 10" />
    <BuildingNumRow title="合计" num="0, 1, 1" />
    <BuildingNumRow title="第一区域的建筑数量上限" num="\, \, 0" />
    <BuildingNumRow title="第二区域的建筑数量上限" num="\, \, 1" />
</BuildingNum>

<SmallTitle>重要说明</SmallTitle>

1. 升级小博控制室不需要花费资源，也不需要时间，但是需要满足一定的条件。
2. 将小博控制室升到5级后可解锁一个建造机器人，这个机器人会成为家乡的第6个工人。

<SmallTitle>属性</SmallTitle>

<UnitProperties>
    <UnitProperty pKey="占地面积" pValue="2×2" />
    <UnitProperty pKey="判定面积" pValue="1×1" :isJudgeSquare="true" />  
    <UnitProperty pKey="生命值" pValue="250" />    
</UnitProperties>

<SmallTitle>升级数据</SmallTitle>

<UnitTable :tableExtraInfo="tableExtraInfo">

| 等级 | 需要满足的条件 |
|  --- |      ---     |
|  1   | 花费10万金币（有月卡的话能少一点） |
|  2   | 完成家乡的3个改装：[加农炮](/upgrade/0301-Cannon) 、[箭塔](/upgrade/archer-tower) 和 [迫击炮](/upgrade/0303-Mortar) |
|  3   | 将任意兵种升到18级 |
|  4   | 将任意一个防御建筑升到9级（[城墙](/upgrade/110c-Walls) 除外） |
|  5   | [战争机器](/upgrade/10f0-Battle-Machine) 和 [战斗直升机](/upgrade/10f1-Battle-Copter) 的等级之和达到45级 |

</UnitTable>

<SmallTitle>更新历史</SmallTitle>

<Timeline>
    <TimelineItem date="2023/05/15">
        <TimelineRow>小博控制室取代以前的奥仔小屋。现在家乡的第6个工人由小博接替，而奥仔成了夜世界的第二个常驻工人。</TimelineRow>
    </TimelineItem>
     <TimelineItem date="2019/06/18">
        <TimelineRow>夜世界9本推出，9本可新建一个奥仔小屋。</TimelineRow>
    </TimelineItem>   
    <TimelineItem :historyBottom="true" />
</Timeline>