export type CreatorVideo = {
  cover?: string;
  title: string;
  url?: string;
  likes: string;
  platform?: string;
};

export const creatorStats = [
  {
    value: "—",
    label: "Followers",
  },
  {
    value: "—",
    label: "Likes & Saves",
  },
];

export const creatorVideos: CreatorVideo[] = [
  {
    title: "叽里呱啦游松潘",
    url: "https://v.douyin.com/l6q94nU6eLA/",
    likes: "8",
    platform: "Douyin",
    cover: "/creator/douyin-songpan-cover.webp",
  },
  {
    title: "在大自然里头，人就容易逼逼叨叨",
    url: "https://www.douyin.com/user/self?from_tab_name=main&modal_id=7562208968605486346&showTab=post",
    likes: "9",
    platform: "Douyin",
    cover: "/creator/douyin-munigou-cover.webp",
  },
  {
    title: "这首歌的毒很深呀！",
    url: "https://v.douyin.com/UGN-DG9a25c/",
    likes: "4",
    platform: "Douyin",
    cover: "/creator/douyin-songmuzi-cover.webp",
  },
  {
    title: "「深圳城中村女孩vlog」毕业两年，来到这座新的城市，重新开始！",
    url: "https://www.bilibili.com/video/BV1z64y1o7zR/?share_source=copy_web&vd_source=bfe7bb7a6d9f7978ea3f4bf82ba4205c",
    likes: "3",
    platform: "Bilibili",
    cover: "/creator/bilibili-shenzhen-restart-cover.jpg",
  },
  {
    title: "2000多元的深圳城中村出租屋，没电梯，搬起家太累了吧！",
    url: "https://www.bilibili.com/video/BV1U64y1R78i/?spm_id_from=333.1387.homepage.video_card.click&vd_source=7b238ed4e237db8d612c4c9744866de0",
    likes: "24",
    platform: "Bilibili",
    cover: "/creator/bilibili-shenzhen-rent-cover.jpg",
  },
];
