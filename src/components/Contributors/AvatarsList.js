import React from "react"
import SiteConfig from "../../../site-config"

const AvatarsList = () => (
  <div className="w-100 d-flex flex-row flex-wrap">
    {SiteConfig.Contributors.map(contrib => (
      <div className="px-1 mb-2" style={{ width: "10%", borderRadius: "50%" }}>
        <img
          className="rounded-circle"
          src={contrib.image}
          alt="contributor avatar"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    ))}
  </div>
)
// {
//   const [contributors, setContributors] = useState([])

//   useEffect(() => {
//     fetch(
//       "https://api.github.com/repos/winningproduct/learn-portal/contributors"
//     )
//       .then(res => res.json())
//       .then(data => {
//         setContributors(data)
//       })
//   }, [])

//   return (
//     <div className="w-100 d-flex flex-row flex-wrap">
//       {contributors.map(contributor => (
//         <div
//           className="px-1 mb-2"
//           style={{ width: "10%", borderRadius: "50%" }}
//         >
//           <a href={contributor.url}>
//             <img
//               className="rounded-circle"
//               src={contributor.avatar_url}
//               alt="contributor avatar"
//               style={{ width: "100%", height: "auto" }}
//             />
//           </a>
//         </div>
//       ))}
//     </div>
//   )
// }

export default AvatarsList
