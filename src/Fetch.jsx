import React from 'react'

const Fetch = () => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [linkValido, setlinkValido] = React.useState(false);

    const request = async (url,infos) =>{
        let response;
        let json;
        try{
            setError(null);
            setLoading(true);
            setlinkValido(false)
            response = await fetch(url,infos)
            json = await response.json()
            if(response.ok == false){
                setlinkValido(true)
                setData(json)
            }
        }catch (error){
            json = null
            setError(error);
        }finally{
            setData(json.short_url);
            setLoading(false);
            return{response,json}
        }
    }

  return {
      data,
      error,
      loading,
      linkValido,
      request,
  }
  
}

export default Fetch