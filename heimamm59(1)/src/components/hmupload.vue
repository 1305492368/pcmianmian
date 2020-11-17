<template>
  <!-- 上传组件 -->
  <el-upload
    class="avatar-uploader"
    :action="baseUrl + '/question/upload'"
    name="file"
    :show-file-list="false"
    :before-upload="beforeAvatarUpload"
    :on-success="handleAvatarSuccess"
  >
    <div v-if="mode == 'video'">
      <!-- controls  控制面板   autoplay自动播放 -->
      <video controls autoplay v-if="value" :src="baseUrl + '/' + value" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </div>
    <div v-else>
      <img v-if="value" :src="baseUrl + '/' + value" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </div>
  </el-upload>
</template>
<script>
export default {
  props: ["value", "mode"],
  data() {
    return {
      // imageUrl: '',
      baseUrl: process.env.VUE_APP_URL
    };
  },
  methods: {
    handleAvatarSuccess(res) {
      this.$emit("input", res.data.url);
      // this.imageUrl = res.data.url
      // this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      window.console.log(file);
      if (this.mode == "video") {
        //视频处理
        const isMP4 = file.type === "video/mp4";
        const isLt8M = file.size / 1024 / 1024 < 8;
        // 后端接口没有做断点续传,你是传不了大文件

        if (!isMP4) {
          this.$message.error("上传视频只能是 mp4 格式!");
        }
        if (!isLt8M) {
          this.$message.error("上传视频大小不能超过 8MB!");
        }
        return isMP4 && isLt8M;
      } else {
        const isJPG = file.type === "image/jpeg" || file.type === "image/png";
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error("上传头像图片只能是 JPG 格式!");
        }
        if (!isLt2M) {
          this.$message.error("上传头像图片大小不能超过 2MB!");
        }
        return isJPG && isLt2M;
      }
    }
  }
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style> 
