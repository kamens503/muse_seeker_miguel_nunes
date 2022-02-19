
export default function Card (props) {
    return(
        <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg text-left">
            <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" />
            <h3 class="tracking-widest text-red-400 text-xs font-medium title-font">{props.subTitle}</h3>
            <h2 class="text-lg text-white font-medium title-font mb-4">{props.titleName}</h2>
            <p class="leading-relaxed text-base">{props.desc}</p>
            </div>
        </div>
    )
}