import{_ as o,r,o as i,c,a as e,b as n,F as l,e as t,d as a}from"./app.07ce7a66.js";var d="/assets/tx_format.1023848a.png",p="/assets/compact_array_format.6984243f.png",u="/assets/legacy_message.09ab30b7.png",h="/assets/message_header.8eb7d589.png",m="/assets/compat_array_of_account_addresses.7792e5c7.png",g="/assets/compact_array_of_ixs.6281d70b.png",b="/assets/issues_with_legacy_txs.5766db66.png",f="/assets/luts.96a8a310.png",y="/assets/lut_format.060d6be2.png",_="/assets/messagev0.c089b240.png",k="/assets/compact_array_of_luts.9175e491.png",w="/assets/new_compact_array_of_ixs.54090dc5.png";const v={},T=t('<h1 id="versioned-transactions" tabindex="-1"><a class="header-anchor" href="#versioned-transactions" aria-hidden="true">#</a> Versioned Transactions</h1><p>Solana recently released Versioned Transactions. The proposed changes are as follows:</p><ol><li><p>Introduce a new program which manages on-chain address lookup tables</p></li><li><p>Add a new transaction format which can make use of on-chain address lookup tables</p></li></ol><h2 id="facts" tabindex="-1"><a class="header-anchor" href="#facts" aria-hidden="true">#</a> Facts</h2><div class="custom-container tip"><p class="custom-container-title">Fact Sheet</p><ul><li>Legacy transactions have a major issue: Maximum allowed size of 1232 bytes, and hence the number of accounts that can fit in an atomic transaction: 35 addresses.</li><li>Address Lookup Tables (LUTs): Once accounts are stored in this table, the address of the table can be referenced in a transaction message using 1-byte u8 indices.</li><li><code>solana/web3.js</code>&#39;s <code>createLookupTable()</code> can be used to construct a new lookup table, as well as determine its address.</li><li>Once an LUT is created, it can be extended, ie., accounts can be appended to the table.</li><li>Versioned Transactions: The structure of legacy transaction needs to be modified to incorporate LUTs</li><li>Before versioning was introduced, txs left an unused upper bit in the first byte of their headers, which can be used to explicitly declare the version of txs</li></ul></div><p>We&#39;ll talk more about the above introduced changes and what they mean for developers. To understand the changes better, however, we need to first understand the anatomy of a regular (or legacy) transaction.</p><h2 id="legacy-transaction" tabindex="-1"><a class="header-anchor" href="#legacy-transaction" aria-hidden="true">#</a> Legacy Transaction</h2>',7),x=a("The Solana network uses a maximum transactional unit (MTU) size of 1280 bytes, adherent to the "),q={href:"https://en.wikipedia.org/wiki/IPv6_packet",target:"_blank",rel:"noopener noreferrer"},A=a("IPv6 MTU"),L=a(" size constraints to ensure speed and reliability. This leaves "),V=e("strong",null,"1232 bytes",-1),C=a(" for packet data like serialised transactions."),S=e("p",null,"A transaction is comprised of:",-1),U=a("A compact array of signatures, where each signature is a 64 byte "),I={href:"https://ed25519.cr.yp.to/",target:"_blank",rel:"noopener noreferrer"},M=a("ed25519"),j=a("."),W=e("li",null,"A (legacy) message",-1),B=e("p",null,[e("img",{src:d,alt:"Transaction Format"})],-1),H={class:"custom-container tip"},P=e("p",{class:"custom-container-title"},"Compact-Array format",-1),R=e("p",null,"A compact array is an array serialised to have the following components:",-1),F=a("An array length in a multi-byte encoding called "),N={href:"https://beta.docs.solana.com/developing/programming-model/transactions#compact-u16-format",target:"_blank",rel:"noopener noreferrer"},E=a("Compact-u16"),z=e("li",null,"Followed by each array item",-1),O=e("p",null,[e("img",{src:p,alt:"Compact array format"})],-1),D=t('<h2 id="legacy-message" tabindex="-1"><a class="header-anchor" href="#legacy-message" aria-hidden="true">#</a> Legacy Message</h2><p>A Legacy Message has the following components:</p><ol><li>A header</li><li>A compact-array of account addresses, where each account address takes 32 bytes</li><li>A recent blockhash</li></ol><ul><li>a 32-byte SHA-256 hash used to indicate when ledger was last observed. If a blockhash is too old, validators reject it.</li></ul><ol start="4"><li>A compact-array of Instructions</li></ol><p><img src="'+u+'" alt="Legacy Message"></p><h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h3><p>The message header is 3 bytes in length and contains 3 u8 integers:</p><ol><li>The number of required signatures: the Solana runtime verifies this number with the length of the compact array of signatures in the transaction.</li><li>The number of read-only account addresses that require signatures.</li><li>The number of read-only account addresses that do not require signatures.</li></ol><p><img src="'+h+'" alt="Message Header"></p><h3 id="compact-array-of-account-addresses" tabindex="-1"><a class="header-anchor" href="#compact-array-of-account-addresses" aria-hidden="true">#</a> Compact-array of account addresses</h3><p>This compact array starts with a compact-u16 encoding of the number of account addresses, followed by:</p><ol><li><strong>Account addresses that require signatures</strong>: The addresses that request read and write access are listed first, followed by the ones that request for read-only access</li><li><strong>Account addresses that do not require signatures</strong>: Same as above, the addresses that request read and write access are listed first, followed by the ones that request for read-only access</li></ol><p><img src="'+m+'" alt="Compact array of account addresses"></p><h3 id="compact-array-of-instructions" tabindex="-1"><a class="header-anchor" href="#compact-array-of-instructions" aria-hidden="true">#</a> Compact array of instructions</h3><p>Much like the array of account addresses, this compact array starts with a compact-u16 encoding of the number of instructions, followed by an array of instructions. Each instruction in the array has the following components:</p><ol><li><strong>Program ID</strong>: identifies an on-chain program that will process the instruction. This is represented as a u8 index to an address in the compact array of account addresses inside the message.</li><li><strong>Compact array of account address indexes</strong>: u8 indexes to a subset of account addresses in the compact array of account addresses, that require signatures.</li><li><strong>Compact array of opaque u8 data</strong>: a general purpose byte array that is specific to the program ID mentioned before. This array of data specifies any operations that the program should perform and any additional information that the accounts might not contain.</li></ol><p><img src="'+g+'" alt="Compact array of Instructions"></p><h2 id="issues-with-legacy-transactions" tabindex="-1"><a class="header-anchor" href="#issues-with-legacy-transactions" aria-hidden="true">#</a> Issues with Legacy Transactions</h2><p>What is the issue with the above Transaction model?</p><p><strong>The max size of a transaction, and hence the number of accounts that can fit in a single atomic transaction.</strong></p><p>As discussed earlier, the maximum allowed size of a transaction is <strong>1232 bytes</strong>. The size of an account address is 32 bytes. Thus, a transaction can at the very best store <strong>35 accounts</strong>, taking into account some space for headers, signatures and other metadata.</p><p><img src="'+b+'" alt="Issue with legacy transactions"></p><p>This is problematic as there are several cases where developers need to include 100s of signature-free accounts in a single transaction. This is currently not possible with the legacy transaction model. The solution currently being used is to temporarily store state on-chain and consume it later in transactions. This workaround does not work when multiple programs need to be composed in a single transaction. Each program requires multiple accounts as input and hence we fall into the same problem as before.</p><p>This is where <strong>Address Lookup Tables (LUT)</strong> are introduced.</p><h2 id="address-lookup-tables-lut" tabindex="-1"><a class="header-anchor" href="#address-lookup-tables-lut" aria-hidden="true">#</a> Address Lookup Tables (LUT)</h2><p>The idea behind Address Lookup Tables is to store account addresses in a table-like (array) data structure on-chain. Once accounts are stored in this table, the address of the table can be referenced in a transaction message. To point to an individual account within the table, a 1-byte u8 index is needed.</p><p><img src="'+f+'" alt="LUTs"></p><p>This opens up space as addresses need not be stored inside the transaction message anymore. They only need to be referenced in the form of an index within the array like table. This leads to a possibility of referencing 2^8=<strong>256</strong> accounts, as accounts are referenced using a u8 index.</p><p>LUTs need to be rent-exempt when initialised or whenever a new address is added to the table. Addresses can be added to this table either by an on-chain buffer, or by directly appending them to the table through the <code>Extension</code> instruction. Furthermore, LUTs can store associated metadata followed by a compact-array of accounts. Below you can see the structure of a typical Address Lookup Table.</p><p><img src="'+y+`" alt="LUT Format"></p><p>One important pitfall of LUTs is that since address lookups require extra overhead during transaction processing, they usually incur higher costs for a transaction.</p><h2 id="versioned-transactions-transactionv0" tabindex="-1"><a class="header-anchor" href="#versioned-transactions-transactionv0" aria-hidden="true">#</a> Versioned Transactions: TransactionV0</h2><p>The structure of legacy transaction needs to be modified to incorporate address table lookups. These changes should not break transaction processing on Solana, nor should they indicate any format changes to the invoked programs.</p><p>To ensure the above, it is important to explicitly mention the transaction type: <code>legacy</code> or <code>versioned</code>. How do we include this information in a transaction?</p><p>Before versioning was introduced, transactions left an unused upper bit in the first byte of their message headers: <code>num_required_signatures</code>. We can now use this bit to explicitly declare the version of our transactions.</p><div class="language-rust ext-rs line-numbers-mode"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">enum</span> <span class="token type-definition class-name">VersionedMessage</span> <span class="token punctuation">{</span>
    <span class="token class-name">Legacy</span><span class="token punctuation">(</span><span class="token class-name">Message</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token constant">V0</span><span class="token punctuation">(</span><span class="token namespace">v0<span class="token punctuation">::</span></span><span class="token class-name">Message</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>If the first bit is set, the remaining bits in the first byte will encode a version number. Solana is beginning with \u201CVersion 0\u201D, which is the versioned required to begin using LUTs.</p><p>If the first bit is not set, the transaction will be considered a \u201CLegacy Transaction\u201D and the remainder of the first byte will be treated as the first byte of an encoded legacy message.</p><h2 id="messagev0" tabindex="-1"><a class="header-anchor" href="#messagev0" aria-hidden="true">#</a> MessageV0</h2><p>The structure of the new MessageV0 is more or less the same, except for two small but important changes:</p><ol><li><strong>Message Header</strong>: unchanged from legacy</li><li><strong>Compact array of account keys</strong>: unchanged from legacy. We will denote the array of indexes pointing to elements in this array as <em>index array A</em> (you will see why we are denoting this soon)</li><li><strong>Recent blockhash</strong>: unchanged from legacy</li><li><strong>Compact array of instructions</strong>: change from legacy</li><li><strong>Compact array of address table lookups</strong>: introduced in v0</li></ol><p><img src="`+_+'" alt="Message v0"></p><p>We&#39;ll first discuss the structure of the compact array of address table lookups before seeing what changed in the instruction array.</p><h3 id="compact-array-of-address-table-lookups" tabindex="-1"><a class="header-anchor" href="#compact-array-of-address-table-lookups" aria-hidden="true">#</a> Compact array of address table lookups</h3><p>This struct introduces Address Lookup Tables (LUT) to Versioned Transactions, hence enables the usage of LUTs for loading more readonly and writable accounts in a single transaction.</p><p>The compact array starts with a compact-u16 encoding of the number of address table lookups, followed by an array of address table lookups. Each lookup has the following structure:</p><ol><li><strong>Account key</strong>: account key of the address lookup table</li><li><strong>Writable indexes</strong>: compact array of indexes used to load writable account addresses. We will denote this array as <em>index array B</em>.</li><li><strong>Readonly indexes</strong>: compact array of indexes used to load readonly account addresses. We will denote this array as <em>index array C</em>.</li></ol><p><img src="'+k+'" alt="Compact array of LUTs"></p><p>Now let&#39;s see what changes were made in the instructions compact array</p><h3 id="compact-array-of-instructions-1" tabindex="-1"><a class="header-anchor" href="#compact-array-of-instructions-1" aria-hidden="true">#</a> Compact array of instructions</h3><p>As discussed before, the compact array of legacy instructions stores individual legacy instructions that in-turn store the following:</p><ol><li>Program ID index</li><li>Compact array of account address indexes</li><li>Compact array of opaque 8-bit data</li></ol><p>The change in the new instruction is not in the structure of the instruction itself, but the array being used to get indexes from for 1 and 2. In legacy transactions, a subset of the index array A is used, while in versioned transactions, a subset of the combined array of the following are used:</p><ol><li><strong>index array A</strong>: Compact array of accounts stored in the message</li><li><strong>index array B</strong>: Writable indexes in address table lookup</li><li><strong>index array C</strong>: Readonly indexes in address table lookup</li></ol><p><img src="'+w+`" alt="New Compact array of Instructions"></p><h2 id="rpc-changes" tabindex="-1"><a class="header-anchor" href="#rpc-changes" aria-hidden="true">#</a> RPC Changes</h2><p>Transaction responses will require a new version field: <code>maxSupportedTransactionVersion</code> to indicate to clients which transaction structure needs to be followed for deserialisation.</p><p>The following methods need to be updated to avoid errors:</p><ul><li><code>getTransaction</code></li><li><code>getBlock</code></li></ul><p>The following parameter needs to be added to the requests:</p><p><code>maxSupportedTransactionVersion: 0</code></p><p>If <code>maxSupportedTransactionVersion</code> is not explicitly added to the request, the transaction version will fallback to <code>legacy</code>. Any block that contains a versioned transaction will return with an error by the client in the case of a legacy transaction.</p><p>You can set this via JSON formatted requests to the RPC endpoint like below:</p><div class="language-plaintext ext-plaintext line-numbers-mode"><pre class="language-plaintext"><code>curl http://localhost:8899 -X POST -H &quot;Content-Type: application/json&quot; -d \\
&#39;{&quot;jsonrpc&quot;: &quot;2.0&quot;, &quot;id&quot;:1, &quot;method&quot;: &quot;getBlock&quot;, &quot;params&quot;: [430, {
  &quot;encoding&quot;:&quot;json&quot;,
  &quot;maxSupportedTransactionVersion&quot;:0,
  &quot;transactionDetails&quot;:&quot;full&quot;,
  &quot;rewards&quot;:false
}]}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,65),K=a("You can also do the same using the "),Y={href:"https://solana-labs.github.io/solana-web3.js/",target:"_blank",rel:"noopener noreferrer"},G=e("code",null,"@solana/web3.js",-1),J=a(" library."),Q=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// connect to the \`devnet\` cluster and get the current \`slot\`</span>
<span class="token keyword">const</span> connection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">web3<span class="token punctuation">.</span>Connection</span><span class="token punctuation">(</span>web3<span class="token punctuation">.</span><span class="token function">clusterApiUrl</span><span class="token punctuation">(</span><span class="token string">&quot;devnet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> slot <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getSlot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// get the latest block (allowing for v0 transactions)</span>
<span class="token keyword">const</span> block <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getBlock</span><span class="token punctuation">(</span>slot<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">maxSupportedTransactionVersion</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// get a specific transaction (allowing for v0 transactions)</span>
<span class="token keyword">const</span> getTx <span class="token operator">=</span> <span class="token keyword">await</span> connection<span class="token punctuation">.</span><span class="token function">getTransaction</span><span class="token punctuation">(</span>
  <span class="token string">&quot;3jpoANiFeVGisWRY5UP648xRXs3iQasCHABPWRWnoEjeA93nc79WrnGgpgazjq4K9m8g2NJoyKoWBV1Kx5VmtwHQ&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">maxSupportedTransactionVersion</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="other-resources" tabindex="-1"><a class="header-anchor" href="#other-resources" aria-hidden="true">#</a> Other Resources</h2>`,2),X={href:"https://beta.docs.solana.com/developing/versioned-transactions#how-create-a-versioned-transaction",target:"_blank",rel:"noopener noreferrer"},Z=a("How to build a Versioned Transaction"),$={href:"https://beta.docs.solana.com/developing/lookup-tables#how-to-create-an-address-lookup-table",target:"_blank",rel:"noopener noreferrer"},ee=a("How to build a Versioned Transaction with Address Lookup using LUTs"),ae={href:"https://beta.docs.solana.com/proposals/transactions-v2#limitations",target:"_blank",rel:"noopener noreferrer"},se=a("Limitations of Versioned Transactions"),ne={href:"https://beta.docs.solana.com/proposals/transactions-v2#security-concerns",target:"_blank",rel:"noopener noreferrer"},te=a("Security concerns of Versioned Transactions"),oe={href:"https://beta.docs.solana.com/proposals/transactions-v2#other-proposals",target:"_blank",rel:"noopener noreferrer"},re=a("Alternate proposed solutions to Versioned Transactions"),ie=e("h2",{id:"references",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#references","aria-hidden":"true"},"#"),a(" References")],-1),ce={href:"https://beta.docs.solana.com/proposals/transactions-v2",target:"_blank",rel:"noopener noreferrer"},le=a("Transactions-V2 Proposal"),de={href:"https://beta.docs.solana.com/developing/versioned-transactions",target:"_blank",rel:"noopener noreferrer"},pe=a("Developing with Versioned Transactions");function ue(he,me){const s=r("ExternalLinkIcon");return i(),c(l,null,[T,e("p",null,[x,e("a",q,[A,n(s)]),L,V,C]),S,e("ol",null,[e("li",null,[U,e("a",I,[M,n(s)]),j]),W]),B,e("div",H,[P,R,e("ol",null,[e("li",null,[F,e("a",N,[E,n(s)])]),z]),O]),D,e("p",null,[K,e("a",Y,[G,n(s)]),J]),Q,e("ul",null,[e("li",null,[e("a",X,[Z,n(s)])]),e("li",null,[e("a",$,[ee,n(s)])]),e("li",null,[e("a",ae,[se,n(s)])]),e("li",null,[e("a",ne,[te,n(s)])]),e("li",null,[e("a",oe,[re,n(s)])])]),ie,e("ul",null,[e("li",null,[e("a",ce,[le,n(s)])]),e("li",null,[e("a",de,[pe,n(s)])])])],64)}var be=o(v,[["render",ue]]);export{be as default};
