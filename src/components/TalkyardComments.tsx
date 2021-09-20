import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


// look at https://github.com/infracost/docusaurus-plugin-plausible  ?
// via: https://plausible.io/docs/docusaurus-integration

/* Instrs for Something Else:
<script>talkyardServerUrl='https://site-1mz3non7ir.talkyard.io';</script>
<script async defer src="https://tyw-49f8.kxcdn.com/-/talkyard-comments.min.js"></script>
<!-- You can specify a per page discussion id on the next line, if your URLs might change. -->
<div class="talkyard-comments" data-discussion-id="" style="margin-top: 45px;">
<noscript>Please enable Javascript to view comments.</noscript>
<p style="margin-top: 25px; opacity: 0.9; font-size: 96%">Comments powered by
<a href="https://www.talkyard.io">Talkyard</a>.</p>
</div>

*/

export default function TalkyardComments(props: { discId?: string }): JSX.Element {
  console.log('In TalkyardComments');
  const { siteConfig } = useDocusaurusContext();
  const { talkyardServerUrl } = siteConfig.customFields;
  global.talkyardServerUrl = talkyardServerUrl;
  // <script>talkyardServerUrl='http://comments-for-e2e-test-embcomman-localhost-8080.localhost';</script>
  // <script async defer src="http://comments-for-e2e-test-embcomman-localhost-8080.localhost/-/talkyard-comments.js"></script>
  // <script async defer src="http://site-ovlg221le9.localhost/-/talkyard-comments.js"></script>


  // and:  .min
  return <>
    <Head>
      <script async defer src="https://tyw-49f8.kxcdn.com/-/talkyard-comments.js"></script>
    </Head>
    <div className="talkyard-comments" data-discussion-id={ props?.discId || '' }></div>
  </>;
}
