import React from 'react';
import PostAuthor from '../components/PostAuthor';
import { Link } from 'react-router-dom';
import Thumnail from '../images/blog13.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail-container">
        <div className="post-detail-header">
          <PostAuthor />
          <div className="post-detail-buttons">
            <Link to={"/posts/shksf/edit"} className="btn sm primary">
              Edit
            </Link>
            <Link to={"/posts/shksf/delete"} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail-thumbnail">
          <img src={Thumnail} alt="" />
        </div>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
          atque voluptate voluptatem odit numquam aspernatur obcaecati
          consectetur inventore repudiandae, temporibus maxime. Tempore adipisci
          veritatis cum. Labore, a eligendi? Exercitationem illo corrupti dicta!
          Ipsam expedita quam voluptatum assumenda quasi incidunt accusantium
          sed totam corporis cupiditate! Omnis cum quasi fugiat doloribus et ex
          a placeat.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          ipsum voluptate odio repellat praesentium, necessitatibus dolores
          aliquid exercitationem, voluptatem aut, illo accusamus totam? Quisquam
          iusto repudiandae nulla? Distinctio molestiae asperiores blanditiis
          alias delectus expedita itaque placeat ut ducimus at porro quam sit,
          necessitatibus illo, soluta cupiditate id esse? Reprehenderit fuga
          veritatis quas rerum voluptatibus facilis veniam consequatur omnis.
          Quo cum vitae, est odit cupiditate eveniet reiciendis provident odio,
          doloribus ipsam illum. Dolor tenetur reprehenderit magnam, libero
          expedita sit vel dolorem, odit delectus enim nesciunt architecto eos
          cumque eum. Minus impedit sit quisquam sapiente atque quidem officia
          assumenda eius pariatur. Ea sit natus delectus, maiores facere nostrum
          at exercitationem repellat tempora voluptas, debitis omnis
          voluptatibus id numquam unde molestias repudiandae inventore vel ad
          saepe?
        </p>

        <p>
          Unde odit, sint numquam a iusto praesentium! Odio eligendi suscipit
          iusto voluptatibus voluptates ratione excepturi hic quidem explicabo
          Voluptatum, aperiam officiis facilis animi maxime cupiditate explicabo
          quisquam dicta aspernatur nam odit quas veniam porro quam laudantium
          ipsum, nisi dolorem natus molestias sequi impedit reiciendis quidem
          optio? Saepe, voluptate veniam dignissimos quas quisquam nobis,
          excepturi consequuntur commodi labore doloremque ad ut aliquam earum
          nam laudantium eveniet aliquid. Omnis neque ab saepe animi ex.
          Perferendis mollitia repellat ut temporibus porro asperiores
          reprehenderit vitae natus soluta in cum quidem voluptas, nihil
          dignissimos omnis quibusdam placeat ipsum sit quo! eos necessitatibus
          atque ipsam cumque cupiditate, vero autem quibusdam error amet in
          earum. Enim temporibus eniet veritatis qui temporibus soluta, ex ipsum
          rem voluptatem esse reprehenderit impedit vero?
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
          iure omnis commodi veritatis libero dignissimos quibusdam dolore
          dolorum fugit natus, magni ut cum quam molestias aut maxime quae
          ratione, voluptatem sit corrupti praesentium. Accusamus sed cumque vel
          esse voluptates autem possimus facilis tempora in quod eligendi,
          mollitia ut aut. Animi quis illum dolor blanditiis quod omnis optio
          est soluta modi dicta cupiditate nisi perferendis, consequatur, esse
          doloribus. Hic voluptates possimus eligendi sint harum? Nisi
          recusandae ratione quis explicabo ipsa deleniti ad neque! Rerum amet
          fugit impedit. Ipsam obcaecati dicta quae suscipit recusandae
          consequatur sunt eaque doloribus officiis quasi fugit, unde libero!
          Iusto earum corrupti eius mollitia libero voluptates, dolores harum
          distinctio modi numquam ab suscipit nostrum adipisci quis ducimus
          excepturi animi nihil officiis officia? Mollitia eveniet, labore
          ducimus suscipit omnis voluptates. Magni, libero officia! Praesentium,
          est corporis. Voluptates in perferendis assumenda corrupti beatae
          nulla vero laudantium est totam. Commodi quam, consectetur architecto
          laudantium alias nostrum, nemo aut reiciendis necessitatibus
          exercitationem possimus ipsa. A adipisci corporis laudantium incidunt
          debitis quaerat eligendi ut voluptates deserunt nobis, exercitationem
          blanditiis obcaecati. Eius, ullam! Itaque reprehenderit at, possimus
          voluptatibus modi aut quas, nulla sunt distinctio necessitatibus
          numquam laboriosam facilis atque porro ab! Architecto, expedita
          similique?
        </p>
      </div>
    </section>
  );
}

export default PostDetail
