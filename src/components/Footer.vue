<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>{{ i18n.t('footer.companyName') }}</h3>
          <p>
            {{ i18n.t('footer.description') }}
          </p>
          <div class="footer-email">
            <div class="email-icon">📧</div>
            <a href="mailto:lumina.education.institute@gmail.com">
              lumina.education.institute@gmail.com
            </a>
          </div>
        </div>

        <div class="footer-section">
          <h4>{{ i18n.t('footer.officesTitle') }}</h4>
          <ul class="offices-list">
            <li>
              <strong>{{ i18n.t('branches.offices.hongKong.name') }}</strong>
              <span>{{ i18n.t('branches.offices.hongKong.address') }}</span>
            </li>
            <li>
              <strong>{{ i18n.t('branches.offices.uk.name') }}</strong>
              <span>{{ i18n.t('branches.offices.uk.address') }}</span>
            </li>
            <li>
              <strong>{{ i18n.t('branches.offices.canada.name') }}</strong>
              <span>{{ i18n.t('branches.offices.canada.address') }}</span>
            </li>
            <li>
              <strong>{{ i18n.t('branches.offices.shanghai.name') }}</strong>
              <span>{{ i18n.t('branches.offices.shanghai.address') }}</span>
            </li>
            <li>
              <strong>{{ i18n.t('branches.offices.xian.name') }}</strong>
              <span>{{ i18n.t('branches.offices.xian.address') }}</span>
            </li>
            <li>
              <strong>{{ i18n.t('branches.offices.guangzhou.name') }}</strong>
              <span>{{ i18n.t('branches.offices.guangzhou.address') }}</span>
            </li>
            <li>
              <strong>{{ i18n.t('branches.offices.ningbo.name') }}</strong>
              <span>{{ i18n.t('branches.offices.ningbo.address') }}</span>
            </li>
            <li>
              <strong>{{ i18n.t('branches.offices.foshan.name') }}</strong>
              <span>{{ i18n.t('branches.offices.foshan.address') }}</span>
            </li>
          </ul>
        </div>

        <!-- <div class="footer-section">
          <h4>快速链接</h4>
          <ul>
            <li><a href="#hero">首页</a></li>
            <li><a href="#services">服务</a></li>
            <li><a href="#team">团队</a></li>
            <li><a href="#about">关于我们</a></li>
            <li><a href="#contact">联系我们</a></li>
          </ul>
        </div> -->

        <div class="footer-section">
          <h4>{{ i18n.t('footer.platformTitle') }}</h4>
          <ul>
            <li><a href="/teacher">{{ i18n.t('footer.platform.teacher') }}</a></li>
            <li><a href="/student">{{ i18n.t('footer.platform.student') }}</a></li>
            <!-- <li class="qrcode-item">
              <span>家长端（扫码进入）</span>
              <div class="qrcode">
                <img src="/images/qrcode-parent.png" alt="家长端二维码" />
              </div>
            </li> -->
          </ul>
        </div>
        
        <div class="footer-section">
          <h4>{{ i18n.t('footer.servicesTitle') }}</h4>
          <ul>
            <li>{{ i18n.t('footer.services.eduConsulting') }}</li>
            <li>{{ i18n.t('footer.services.aiTech') }}</li>
            <li>{{ i18n.t('footer.services.digitalization') }}</li>
            <li>{{ i18n.t('footer.services.internationalCurriculum') }}</li>
            <li>{{ i18n.t('footer.services.studyAbroadPlanning') }}</li>
            <li>{{ i18n.t('footer.services.researchCompetition') }}</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>{{ i18n.t('footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import i18n from '../i18n/index.js'
</script>
